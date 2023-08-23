<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pesanan', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('nama_mempelai_laki');
            $table->string('nama_mempelai_perempuan');
            $table->string('ayah_mempelai_perempuan');
            $table->string('ibu_mempelai_perempuan');
            $table->date('tanggal_terbit');
            $table->string('bukti_pembayaran')->default(0);
            $table->enum('status',['0','1'])->default(0);
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pesanan');
    }
};
