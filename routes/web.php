<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PesananController;
use App\Http\Controllers\TambahPesanController;

Route::get('/', function () {
    return view('auth.signup');
});

Route::get('signout',[UserController::class,'signout'])->name('signout');
Route::get('signup',[UserController::class,'signup'])->name('signup');
Route::get('tambahpesanan',[UserController::class,'tambahpesanan'])->name('tambahpesanan');
Route::post('signup',[UserController::class,'doSignup'])->name('signup.post');
Route::get('signin',[UserController::class,'signin'])->name('signin');
Route::post('signin',[UserController::class,'doSignin'])->name('signin.post');
Route::get('dashcustomer',[UserController::class,'dashCustomer'])->name('dashcustomer');
Route::get('dashadmin',[UserController::class,'dashadmin'])->name('dashadmin');
Route::get('pesanan',[PesananController::class,'index'])->name('pesanan');
Route::post('pesanan',[PesananController::class,'store'])->name('pesanan.post');
Route::delete('pesanan/{pesanan}',[PesananController::class,'destroy'])->name('pesanan.delete');
Route::get('dashcustomer/{pesanan}/edit',[PesananController::class,'edit'])->name('pesanan.edit');
Route::put('pesanan/{pesanan}',[PesananController::class,'update'])->name('pesanan.update');
Route::get('ubah_status/{pesanan}',[PesananController::class,'ubah_status'])->name('pesanan.ubah_status');
Route::put('ubahStatus/{pesanan}',[PesananController::class,'ubahStatus'])->name('pesanan.ubahStatus');


// Route::get('/undangan', function () {
//     return view('signup.index');
// });