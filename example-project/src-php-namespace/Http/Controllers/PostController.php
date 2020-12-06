<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\Models\Post;
use App\Models\Category;
use Hashids\Hashids;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    const CREATE_POST_FLAG = -1;
    const PAGINATE_NUMBER = 12;

    public function index()
    {
        $posts = Post::with('pictures')->orderBy('created_at', 'asc')->paginate(self::PAGINATE_NUMBER);
        $categories = Category::orderBy('id')->get();
        return view('home.index', compact('posts', 'categories'));
    }


    public function edit(Request $request, Post $post = null)
    {
        $edit_post_id = self::CREATE_POST_FLAG;
        if ($post === null) {
            $post = new Post;
        } else {
            $edit_post_id = $post->id;
        }

        $request->session()->flash('edit_post_id', $edit_post_id);

        $categories = Category::orderBy('id')->get();
        return view('admin.post.edit', compact('post', 'categories'));
    }

    public function create(PostRequest $request)
    {
        $input_post = $request->input('post');
        $input_post['published_at'] = date_format(new \DateTime(), 'Y-m-d H:i:s');
        $input_post['user_id'] = Auth::id();

        if (\session('edit_post_id') === self::CREATE_POST_FLAG) {
            $hashids = new Hashids(config('APP_KEY'), Post::HASH_LEN);
            $post = Post::create($input_post);
            $post->hash = $hashids->encode($post->id);
            $post->save();
            $request->session()->flash('edit_post_id', self::CREATE_POST_FLAG);
        }

        return redirect()->route('admin.index');
    }

    public function update(PostRequest $request, Post $post)
    {
        $input_post = $request->input('post');
        $input_post['published_at'] = date_format(new \DateTime(), 'Y-m-d H:i:s');
        $input_post['user_id'] = Auth::id();

        if (\session('edit_post_id') === $post->id) {
            $post->fill($input_post);
            $post->save();
            $request->session()->flash('edit_post_id', self::CREATE_POST_FLAG);
        }

        return redirect()->route('admin.index');
    }

    public function show(Request $request, Post $post)
    {
        $request->session()->flash('edit_post_id', $post->id);

        return view('home.detail', compact('post'));
    }

    public function delete(Post $post)
    {
        $post and $post->delete();
        return redirect()->route('admin.index');
    }
}
