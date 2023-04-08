<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Mail\ContactSendMail;

class ContactSendMail extends Mailable
{
    use Queueable, SerializesModels;
    private $name;
    private $cname;
    private $tel;
    private $emal;
    private $message;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($inputs)
    {
        $this->name  = $inputs['name'];
        $this->cname  = $inputs['cname'];
        $this->tel  = $inputs['tel'];
        $this->email = $inputs['email'];
        $this->content = $inputs['content'];
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('ホームページからのお問合せ')
            ->view('user')
            ->with([
                'name' => $this->name,
                'cname' => $this->cname,
                'tel' => $this->tel,
                'email' => $this->email,
                'content' => $this->content ? $this->content : null
        ]);
    }
}
