<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DaftarTamu extends Model
{
    use HasFactory;
    protected $table = 'daftar_tamu';
    protected $fillable =[
        'undangan_id',
        'slug',
        'nama',
        'no_hp',
        'no_wa',
        'is_hadir',
    ];
    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function undangan()
    {
        return $this->belongsTo(Undangan::class, 'undangan_id');
    }
}
