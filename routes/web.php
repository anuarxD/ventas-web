<?php

use App\Http\Controllers\ProfileController;
use App\Models\Category; // para poder CRUD categorias... 
use App\Models\Product; // para poder CRUD Product
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB; //para hacer consultas como SQL
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::controller(CategoryController::class)->group(function () {
    Route::get('/categories', 'index');
    Route::get('/categories', 'create');
    Route::post('/categories/store','store');
    Route::get('/categories/show/{id}','show');
    Route::get('/categories/edit/{id}','edit');
    Route::put('/categories/update/{id}','update');
    Route::delete('/categories/delete/{id}','destroy');
    
});

Route::controller(ProductController::class)->group(function () {
    Route::get('/products', 'index');
    Route::get('/products', 'create');
    Route::post('/products/store','store');
    Route::get('/products/show/{id}','show');
    Route::get('/products/edit/{id}','edit');
    Route::put('/products/update/{id}','update');
    Route::delete('/products/delete/{id}','destroy');

});


require __DIR__ . '/auth.php';
