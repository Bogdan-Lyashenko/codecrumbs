<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;

use App\Models\Post;
use App\Models\Comment;
use Auth;
use Validator;

class CommentController extends Controller
{
    public function create(CommentRequest $request)
    {
        $input_comment = $request->input('comment');
        $post = Post::where('hash', $input_comment['post_hash'])->first();
        $input_comment['user_id'] = Auth::id();
        $input_comment['post_id'] = $post->id;

        if (\session('edit_post_id') === $post->id) {
            Comment::create($input_comment);
        }

        return redirect()->back();
    }

    public function update(CommentRequest $request)
    {
        $input_comment = $request->input('comment');
        $comment_id = (int)$request->comment_id;
        $post = Post::where('hash', $input_comment['post_hash'])->first();

        if (\session('edit_post_id') === $post->id) {
            $comment = Auth::user()->comments()->find($comment_id);
            $comment->fill($input_comment);
            $comment->save();
        }

        return redirect()->back();
    }
}
