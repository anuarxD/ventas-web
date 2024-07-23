<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $product = new Product();
        $product->name = "Agua mineral";
        $product->salePrice = 13.50;
        $product->quantity = 10;
        $product->status = "Activo";
        $product->category_id = 1;
        $product->save();

        $product2 = new Product();
        $product2->name = "Coca Cola";
        $product2->salePrice = 20.00;
        $product2->quantity = 20;
        $product2->status = "Activo";
        $product2->category_id = 1;
        $product2->save();

        $product3 = new Product();
        $product3->name = "Lomito";
        $product3->salePrice = 15.00;
        $product3->quantity = 5;
        $product3->status = "Activo";
        $product3->category_id = 2;
        $product3->save();
    }
}
