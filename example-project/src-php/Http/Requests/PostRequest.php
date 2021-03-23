<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\Category;


class PostRequest extends FormRequest
{
    public function authorize()
    {
      // authorize
    }
}
