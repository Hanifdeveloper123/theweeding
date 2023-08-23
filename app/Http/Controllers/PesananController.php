<?php

namespace App\Http\Controllers;

use App\Models\Pesanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PesananController extends Controller
{
    public function index(){
        $pesanan=Pesanan::All();
        return view('auth.pesanan',compact('pesanan'));
    }
    public function store(Request $request)
    {
        $request->validate([
            'nama_mempelai_laki'=>'required',
            'nama_mempelai_perempuan'=>'required',
            'tanggal_terbit'=>'required',
        ],[
            'nama_mempelai_laki.required'=>'Nama Mempelai Laki-laki wajib diisi',
            'nama_mempelai_perempuan.required'=>'Nama Mempelai Perempuan wajib diisi',
            'tanggal_terbit.required'=>'Tanggal terbit wajib diisi',
        ]);

        Pesanan::create([
            'user_id'=>Auth::user()->id,
            'nama_mempelai_laki'=>$request->nama_mempelai_laki,
            'nama_mempelai_perempuan'=>$request->nama_mempelai_perempuan,
            'tanggal_terbit'=>$request->tanggal_terbit,
        ]);

        return redirect(route('dashcustomer'))->withSuccess('Pesanan berhasil dibuat');
    }

    public function edit(Pesanan $pesanan)
    {
        return view('pesanan.editpesanan', compact('pesanan'));
    }

    public function update(Request $request, Pesanan $pesanan)
    {
        $request->validate([
            'nama_mempelai_laki'=>'required',
            'nama_mempelai_perempuan'=>'required',
            'tanggal_terbit'=>'required',
            'bukti_pembayaran'=>'required',
        ],[
            'nama_mempelai_laki.required'=>'Nama Mempelai Laki-laki wajib diisi',
            'nama_mempelai_perempuan.required'=>'Nama Mempelai Perempuan wajib diisi',
            'tanggal_terbit.required'=>'Tanggal terbit wajib diisi',
            'bukti_pembayaran.required'=>'Bukti pembayaran wajib diisi',
        ]);

        $file = $request->file('bukti_pembayaran');
        $name = time() . '-' . $pesanan->user_id . '.'.$file->getClientOriginalExtension();
        $tempat = 'img';
        $file->move($tempat, $name);

        if($pesanan->status == '0'){
            Pesanan::where('id',$pesanan->id)->update([
                'nama_mempelai_laki'=>$request->nama_mempelai_laki,
                'nama_mempelai_perempuan'=>$request->nama_mempelai_perempuan,
                'tanggal_terbit'=>$request->tanggal_terbit,
                'bukti_pembayaran'=>$name,
            ]);
        }else{
            Pesanan::where('id',$pesanan->id)->update([
                'nama_mempelai_laki'=>$request->nama_mempelai_laki,
                'nama_mempelai_perempuan'=>$request->nama_mempelai_perempuan,
                'bukti_pembayaran'=>$name,
            ]);
        }


        return redirect(route('dashcustomer'))->withSuccess('Pesanan berhasil diubah');
    }
    public function destroy(Pesanan $pesanan)
    {
        $pesanan->delete();
        return redirect(route('dashcustomer'))->withSuccess('Pesanan berhasil dihapus');
    }

    public function ubah_status(Pesanan $pesanan){
        return view('pesanan.ubah_status', compact('pesanan'));
    }

    public function ubahStatus(Pesanan $pesanan,Request $request){
        $request->validate([
            'status'=>'required',
        ],[
            'status.required'=>'Status wajib diisi',
        ]);

        Pesanan::where('id',$pesanan->id)->update([
            'status'=>$request->status,
        ]);

        return redirect(route('dashadmin'))->withSuccess('Status berhasil diubah');
    }
}
