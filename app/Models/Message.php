<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    public function  message(Request $request) {
        Schema::create('messages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('message');
            $table->timestamps();
        });
    }
}
