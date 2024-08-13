<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Exports\StockProductExport;
use Maatwebsite\Excel\Facades\Excel;

class ProductStockController extends Controller
{
    public function list(){
        $products = Product::with('category')->get();
        return Inertia::render('Reports/Products/List', ['products' => $products]);
    }

    public function pdf(){
        $data = [
            'products' => Product::with('category')->get(),
        ];
        $pdf = PDF::loadView('reports.products.pdf', $data);
        return $pdf->stream('');
    }

    public function excel(){
        return Excel::download(new StockProductExport(), 'products_stock.xlsx');
    }
}
