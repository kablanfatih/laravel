<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('order/{token}', function () {

    return [
        'id' => 1,
        'name' => 'FATİH',
        'surname' => 'KABLAN'
    ];
});

Route::post('users', function (Request $request) {

    $name = $request->email;
    $pass = $request->password;


    $token = crypt($name . $pass,"token");

    return [
        'token' => $token
    ];
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
