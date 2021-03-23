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
  function index()
  {
    // index
  }
}
