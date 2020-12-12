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
    public function index()
    {
      // index
    }
}
