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

        $product = new Product();
        $product->name = "Queso Manchego";
        $product->salePrice = 80.00;
        $product->quantity = 30;
        $product->status = "Activo";
        $product->category_id = 2;
        $product->save();

        $product = new Product();
        $product->name = "Yogurt Griego";
        $product->salePrice = 25.00;
        $product->quantity = 50;
        $product->status = "Activo";
        $product->category_id = 2;
        $product->save();

        $product = new Product();
        $product->name = "Pechuga de Pollo";
        $product->salePrice = 45.00;
        $product->quantity = 20;
        $product->status = "Activo";
        $product->category_id = 3;
        $product->save();

        $product = new Product();
        $product->name = "Costilla de Res";
        $product->salePrice = 90.00;
        $product->quantity = 15;
        $product->status = "Descontinuado";
        $product->category_id = 3;
        $product->save();

        $product = new Product();
        $product->name = "Plátano";
        $product->salePrice = 12.00;
        $product->quantity = 100;
        $product->status = "Activo";
        $product->category_id = 4;
        $product->save();

        $product = new Product();
        $product->name = "Manzana";
        $product->salePrice = 30.00;
        $product->quantity = 60;
        $product->status = "Activo";
        $product->category_id = 4;
        $product->save();

        $product = new Product();
        $product->name = "Pan Integral";
        $product->salePrice = 40.00;
        $product->quantity = 25;
        $product->status = "Activo";
        $product->category_id = 5;
        $product->save();

        $product = new Product();
        $product->name = "Galletas de Avena";
        $product->salePrice = 35.00;
        $product->quantity = 40;
        $product->status = "Descontinuado";
        $product->category_id = 5;
        $product->save();

        $product = new Product();
        $product->name = "Arroz";
        $product->salePrice = 25.00;
        $product->quantity = 80;
        $product->status = "Activo";
        $product->category_id = 6;
        $product->save();

        $product = new Product();
        $product->name = "Frijoles";
        $product->salePrice = 20.00;
        $product->quantity = 90;
        $product->status = "Descontinuado";
        $product->category_id = 6;
        $product->save();

    }
}
