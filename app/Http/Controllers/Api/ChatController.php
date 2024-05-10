<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function message(Request $request)
    {
        $message = $request->input('message');

        // Сохраняем сообщение в базу данных
        Message::create(['message' => $message]);
    
        return response()->json(['success' => true]);
    }
}
