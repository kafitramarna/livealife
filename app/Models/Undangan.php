<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Undangan extends Model
{
    use HasFactory;
    protected $table = 'undangan';
    protected $fillable = [
        'id',
        'users_id',
        'slug',
        'pengantin_pria',
        'pengantin_wanita',
        'tempat_acara',
        'nama_gedung',
        'alamat',
        'kota',
        'provinsi',
        'tanggal_pernikahan',
        'waktu_pernikahan',
    ];
    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function daftarTamus(){
        return $this->hasMany(DaftarTamu::class);
    }
}
