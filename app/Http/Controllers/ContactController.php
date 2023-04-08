<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactSendMail;


class ContactController extends Controller
{
    //
    public function index()
    {
        return view('contact');
    }

    public function confirm(Request $request)
    {
      $inputs = $request->all();
        if(!$inputs){
            return redirect()->route('index');
        }
        $request->validate([
           'name' => 'required',
            'cname' => 'required',
            'tel' => ['required', 'numeric', 'digits_between:8,11'],
            'email' => ['required','email','confirmed'],
            'messgae' => 'max:4000'
        ]);
        return view('confirm',[
            'inputs' => $inputs,
        ]);
    }

    public function send(Request $request)
    {
        $inputs = $request->all();
        if(!$inputs){
            return redirect()->route('index');
        }

        \Mail::to('i4da8n100609@gmail.com')->send(new ContactSendMail($inputs));
        // ユーザー宛メール

        // SESSION 削除
        $request->session()->forget('inputs');

        //   \Mail::to($inputs['email'])->send(new ContactSendMail($inputs));
        // $request->session()->regenerateToken(); //2回メール送信を防ぐため
        return view('thanks')->with('inputs',$inputs);
    }
}
