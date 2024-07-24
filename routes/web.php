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
use App\Http\Controllers\BuyController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\SaleController;

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
    Route::get('/categories/create', 'create');
    Route::post('/categories/store','store');
    Route::get('/categories/show/{id}','show');
    Route::get('/categories/edit/{id}','edit');
    Route::put('/categories/update/{id}','update');
    Route::delete('/categories/delete/{id}','destroy');
    
});

Route::controller(ProductController::class)->group(function () {
    Route::get('/products', 'index');
    Route::get('/products/create', 'create');
    Route::post('/products/store','store');
    Route::get('/products/show/{id}','show');
    Route::get('/products/edit/{id}','edit');
    Route::put('/products/update/{id}','update');
    Route::delete('/products/delete/{id}','destroy');

});

Route::controller(ProviderController::class)->group(function () {
    Route::get('/providers', 'index');
    Route::get('/providers/create', 'create');
    Route::post('/providers/store', 'store');
    Route::get('/providers/{id}', 'show');
    Route::get('/providers/edit/{id}', 'edit');
    Route::put('/providers/update/{id}', 'update');
    Route::delete('/providers/delete/{id}', 'destroy');
});

Route::controller(BuyController::class)->group(function () {
    Route::get('/buys', 'index');
    Route::get('/buys/create', 'create');
    Route::post('/buys/store', 'store');
    Route::get('/buys/show/{id}', 'show');
    Route::get('/buys/edit/{id}', 'edit');
    Route::put('/buys/update/{id}', 'update');
    Route::delete('/buys/delete/{id}', 'destroy');
});

Route::controller(ClientController::class)->group(function () {
    Route::get('/clients', 'index');
    Route::get('/clients/create', 'create');
    Route::post('/clients/store', 'store');
    Route::get('/clients/show/{id}', 'show');
    Route::get('/clients/edit/{id}', 'edit');
    Route::put('/clients/update/{id}', 'update');
    Route::delete('/clients/delete/{id}', 'destroy');
});

Route::controller(SaleController::class)->group(function () {
    Route::get('/sales', 'index');
    Route::get('/sales/create', 'create');
    Route::post('/sales/store', 'store');
    Route::get('/sales/show/{id}', 'show');
    Route::get('/sales/edit/{id}', 'edit');
    Route::put('/sales/update/{id}', 'update');
    Route::delete('/sales/delete/{id}', 'destroy');
});


require __DIR__ . '/auth.php';
