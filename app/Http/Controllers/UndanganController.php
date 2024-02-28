<?php

namespace App\Http\Controllers;

use App\Models\Undangan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UndanganController extends Controller
{
    public function index(){
        $listUndangan = Undangan::where('users_id',auth()->id())->get();
        return Inertia::render('Undangan/IndexUndangan',[
            'listUndangan' => $listUndangan
        ]);
    }
    public function create(){
        return Inertia::render('Undangan/CreateUndangan');
    }
    public function store(Request $request){
        function generateToken() {
            $token = '';
            $characters = '0123456789abcdefghijklmnopqrstuvwxyz';
        
            for ($i = 0; $i < 16; $i++) {
                $token .= $characters[rand(0, strlen($characters) - 1)];
                if (($i + 1) % 4 == 0 && $i < 15) {
                    $token .= '-';
                }
            }
            if (Undangan::where('slug', $token)->exists()) {
                return generateToken();
              }
            return $token;
        }
        $validator = Validator::make($request->all(),[
            'pengantin_pria' => 'required',
            'pengantin_wanita' => 'required',
            'tempat_acara' => 'required',
            'nama_gedung' => 'required_if:tempat_acara,gedung',
            'alamat'=>'required',
            'kota'=>'required',
            'provinsi'=>'required',
            'tanggal_acara'=>'required',
            'jam_mulai_acara'=>'required',
        ]);
        if($validator->fails()){
            return redirect()->back()->withErrors($validator)->withInput();
        }
        Undangan::create([
            'users_id' => auth()->id(),
            'slug' => generateToken(),
            'pengantin_pria' => $request->pengantin_pria,
            'pengantin_wanita' => $request->pengantin_wanita,
            'tempat_acara' => $request->tempat_acara,
            'nama_gedung' => $request->nama_gedung,
            'alamat' => $request->alamat,
            'kota' => $request->kota,
            'provinsi' => $request->provinsi,
            'tanggal_pernikahan' => $request->tanggal_acara,
            'waktu_pernikahan' => $request->jam_mulai_acara,
        ]);
        return redirect()->route('my-undangan.index');
    }
    public function edit(Undangan $undangan){
        if($undangan->users_id != auth()->id()){
            abort(404);
        }
        return Inertia::render('Undangan/EditUndangan',[
            'undangan' => $undangan
        ]);
    }
    public function update(Request $request,Undangan $undangan){
        if($undangan->users_id != auth()->id()){
            abort(404);
        }
        $validator = Validator::make($request->all(),[
            'pengantin_pria' => 'required',
            'pengantin_wanita' => 'required',
            'tempat_acara' => 'required',
            'nama_gedung' => 'required_if:tempat_acara,gedung',
            'alamat'=>'required',
            'kota'=>'required',
            'provinsi'=>'required',
            'tanggal_acara'=>'required',
            'jam_mulai_acara'=>'required',
        ]);
        if($validator->fails()){
            return redirect()->back()->withErrors($validator)->withInput();
        }
        $undangan->update([
            'pengantin_pria' => $request->pengantin_pria,
            'pengantin_wanita' => $request->pengantin_wanita,
            'tempat_acara' => $request->tempat_acara,
            'nama_gedung' => $request->nama_gedung,
            'alamat' => $request->alamat,
            'kota' => $request->kota,
            'provinsi' => $request->provinsi,
            'tanggal_pernikahan' => $request->tanggal_acara,
            'waktu_pernikahan' => $request->jam_mulai_acara,
        ]);
        return redirect()->route('my-undangan.index');
    }
    public function destroy(Undangan $undangan){
        if($undangan->users_id != auth()->id()){
            abort(404);
        }
        $undangan->delete();
        return redirect()->route('my-undangan.index');
    }

    public function show(Undangan $undangan){
        if($undangan->users_id != auth()->id()){
            abort(404);
        }
        return Inertia::render('Undangan/ShowUndangan',[
            'undangan' => $undangan
        ]);
    }
}
