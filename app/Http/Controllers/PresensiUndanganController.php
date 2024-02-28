<?php

namespace App\Http\Controllers;

use App\Models\DaftarTamu;
use App\Models\Undangan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PresensiUndanganController extends Controller
{
    public function index(Undangan $undangan){
        return Inertia::render('PresensiUndangan/IndexPresensiUndangan', [
            'undangan' => $undangan
        ]);
    }
    public function update(Undangan $undangan, DaftarTamu $daftar_tamu){
        if ($undangan->id != $daftar_tamu->undangan_id) {
            $responseData = ['error' => 'Kode undangan tidak sesuai'];
            return response()->json($responseData, 400);
        }
        if ($daftar_tamu->is_hadir == 1) {
            $responseData = ['error' => 'Presensi sudah dilakukan'];
            return response()->json($responseData, 400);
        }
        try {
            $daftar_tamu->update([
                'is_hadir' => 1
            ]);
            return response()->json(['message' => 'Attendance successfully updated', 'data_daftar_tamu' => $daftar_tamu], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Anda Bukan Tamu'], 500);
        }
        
    }
}
