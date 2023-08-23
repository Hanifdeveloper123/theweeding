<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesanan extends Model
{
    use HasFactory;
    protected $table="pesanan";
    protected $fillable=[
        'user_id',
        'nama_mempelai_laki',
        'nama_mempelai_perempuan',
        'tanggal_terbit',
        'bukti_pembayaran',
        'status'
    ];

    public function user(){
        return $this->belongsTo('\App\Models\User');
    }
}
