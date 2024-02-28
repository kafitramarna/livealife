<?php

namespace App\Http\Controllers;

use App\Models\DaftarTamu;
use App\Models\Undangan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class DaftarTamuController extends Controller
{
  public function index(Undangan $undangan)
  {
    if ($undangan->users_id != auth()->id()) {
      abort(404);
    }
    return Inertia::render('DaftarTamu/IndexDaftarTamu', [
      'undangan' => $undangan->load('daftarTamus')
    ]);
  }
  public function create(Undangan $undangan)
  {
    if ($undangan->users_id != auth()->id()) {
      abort(404);
    }
    return Inertia::render('DaftarTamu/CreateDaftarTamu', [
      'undangan' => $undangan
    ]);
  }
  public function store(Undangan $undangan, Request $request)
  {
    if ($undangan->users_id != auth()->id()) {
      abort(404);
    }
    $validator = Validator::make($request->all(), [
      'nama' => 'required',
      'no_hp' => 'required|regex:/^\d{10,13}$/',
      'no_wa' => 'required_if:ceklis,false',
    ]);
    if ($validator->fails()) {
      return redirect()->back()->withErrors($validator)->withInput();
    }
    function generateToken()
    {
      $token = '';
      $characters = '0123456789abcdefghijklmnopqrstuvwxyz';

      for ($i = 0; $i < 20; $i++) {
        $token .= $characters[rand(0, strlen($characters) - 1)];
        if (($i + 1) % 4 == 0 && $i < 19) {
          $token .= '-';
        }
      }
      if (DaftarTamu::where('slug', $token)->exists()) {
        return generateToken();
      }
      return $token;
    }
    DaftarTamu::create([
      'undangan_id' => $undangan->id,
      'slug' => generateToken(),
      'nama' => $request->nama,
      'no_hp' => $request->no_hp,
      'no_wa' => $request->ceklis ? $request->no_hp : $request->no_wa
    ]);
    return redirect()->route('daftar-tamu.index', $undangan->slug);
  }
  public function edit (Undangan $undangan, DaftarTamu $daftar_tamu){
    if ($undangan->users_id != auth()->id()||$undangan->id != $daftar_tamu->undangan_id) {
      abort(404);
    }
    return(Inertia::render('DaftarTamu/EditDaftarTamu',[
      'undangan'=>$undangan,
      'daftar_tamu'=>$daftar_tamu
    ]));
  }
  public function update(Undangan $undangan, DaftarTamu $daftar_tamu, Request $request){
    if ($undangan->users_id != auth()->id()||$undangan->id != $daftar_tamu->undangan_id) {
      abort(404);
    }
    $validator = Validator::make($request->all(), [
      'nama' => 'required',
      'no_hp' => 'required|regex:/^\d{10,13}$/',
      'no_wa' => 'required_if:ceklis,false',
    ]);
    if ($validator->fails()) {
      return redirect()->back()->withErrors($validator)->withInput();
    }
    $daftar_tamu->update([
        'nama'=> $request->nama,
        'no_hp'=> $request->no_hp,
        'no_wa'=> $request->ceklis?$request->no_hp:$request->no_wa
    ]);
    return redirect()->route('daftar-tamu.index',$undangan->slug);
  }
  public function destroy(Undangan $undangan, DaftarTamu $daftar_tamu) {
    if ($undangan->users_id != auth()->id()||$undangan->id != $daftar_tamu->undangan_id) {
      abort(404);
    }
    $daftar_tamu->delete();
    return redirect()->route('daftar-tamu.index',$undangan->slug);
  }
}
