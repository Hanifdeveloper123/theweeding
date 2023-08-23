<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Pesanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use DB;

class UserController extends Controller
{
    public function signout(){
        Auth::logout();
        return redirect(route('signin'));
    }
    public function signup(){
        return view('auth.signup');
    }
    public function signin(){
        if(Auth::check()){
            if(Auth::user()->role=="admin"){
                return redirect(route('dashadmin'));
            }else{
                return redirect(route('dashcustomer'));
            }
        }else{
            return view('auth.signin');
        }
    }

    public function doSignup(Request $request){
        $request->validate([
            'name'=>'required',
            'phone'=>'required',
            'email'=>'required',
            'password'=>'required',
        ],[
            'name.required'=>'Name harus di isi',
            'phone.required'=>'Phone harus di isi',
            'email.required'=>'Email harus di isi',
            'password.required'=>'Password harus di isi',
        ]);

        User::create([
            'name'=>$request->name,
            'phone'=>$request->phone,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
            'role'=>"customer",
        ]);
        $credentials=$request->only('email','password');
        Auth::attempt($credentials);
        $request->session()->regenerate();
        return redirect(route('dashcustomer'))->withSuccess('Sukses Sign Up dan Sign In');
    }
    public function doSignin(Request $request){
        $request->validate([
            'email'=>'required',
            'password'=>'required',
        ],[
            'email.required'=>'Email harus di isi',
            'password.required'=>'Password harus di isi',
        ]);

        $credentials=$request->only('email','password');
        Auth::attempt($credentials);
        if(Auth::user()->role=="admin"){
            // dd(Auth::user());
            $request->session()->regenerate();
            return redirect(route('dashadmin'))->withSuccess('Sukses Sign In');
        }else{
            $request->session()->regenerate();
            return redirect(route('dashcustomer'))->withSuccess('Sukses Sign In');
        }

    }
    public function dashCustomer(){
        if(Auth::check()){
            $id=Auth::user()->id;
            $pesanan=DB::table('pesanan')->where('user_id',$id)->get();
            return view('auth.dashcustomer',compact('pesanan'));
        }
        return redirect(route('signin'));
    }
    public function dashadmin(){
        // if(Auth::check()){
        //     $id=Auth::user()->id;
        //     $pesanan=DB::table('pesanan')->where('user_id',$id)->get();
        //     return view('auth.dashcustomer',compact('pesanan'));
        // }
        $pesanan = Pesanan::all();
        $customer = User::where('role','customer')->get();
        return view('auth.dashadmin',compact('pesanan', 'customer'));
    }


    public function tambahpesanan(){
        return view('auth.tambahpesanan');
    }
}
