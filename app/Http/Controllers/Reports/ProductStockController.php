<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class ProductStockController extends Controller
{
    public function list(){
        $products = Product::with('category')->get();
        return Inertia::render('Reports/Products/List', ['products' => $products]);
    }
}
