<?php

// app/Http/Controllers/Api/MessageController.php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Pusher\Pusher;
use App\Http\Controllers\Controller;
use App\Models\Message;

class MessageController extends Controller
{
    public function sendPrivateMessage(Request $request)
    {
        $message = new Message();
        $message->sender_id = $request->input('sender_id');
        $message->recipient_id = $request->input('recipient_id');
        $message->content = $request->input('message');
        $message->save();

        $pusher = new Pusher('9ccbb4a07c3c4edd88b2', '5e3089db8418fd0ef8d0', '1803514', ['cluster' => 'ap3']);

        $recipientUserId = $request->input('recipient_id');
        $messageText = $request->input('message');

        $data = ['message' => $messageText];

        $pusher->trigger("private-chat.${recipientUserId}", 'message-sent', $data);

        return response()->json(['status' => 'success']);
    }
}
