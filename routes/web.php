<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('top');
});

Route::get('/service', function () {
    return view('service');
});

Route::get('/company', function () {
    return view('company');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/contact',[ContactController::class, 'index'])->name('index');

Route::get('/confirm',[ContactController::class, 'confirm']);
Route::post('/confirm',[ContactController::class, 'confirm'])->name('confirm');

Route::get('/thanks',[ContactController::class, 'send']);
Route::post('/thanks',[ContactController::class, 'send'])->name('send');
