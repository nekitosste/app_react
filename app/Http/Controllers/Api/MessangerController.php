<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\Message;
class MessangerController extends Controller
{
    public function  message(Request $request) {
        event(new Message($request->input('username'), $request->input('message')));
    return [];
    }
}
