<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $category = new Category();
        $category->name = "Bebidas";
        $category->description = "Todo tipo de bebidas: jugos, gaseosas, agua, etc.";
        $category->save();

        $category = new Category();
        $category->name = "Lácteos";
        $category->description = "Productos lácteos: leche, queso, yogurt, etc.";
        $category->save();

        $category = new Category();
        $category->name = "Carnes";
        $category->description = "Carnes frescas y congeladas";
        $category->save();

        $category = new Category();
        $category->name = "Frutas y Verduras";
        $category->description = "Frutas y verduras frescas";
        $category->save();

        $category = new Category();
        $category->name = "Panadería";
        $category->description = "Productos de panadería: panes, galletas, pasteles, etc.";
        $category->save();

        $category = new Category();
        $category->name = "Abarrotes";
        $category->description = "Productos de despensa: arroz, frijoles, pastas, etc.";
        $category->save();

        $category = new Category();
        $category->name = "Congelados";
        $category->description = "Productos congelados: helados, vegetales congelados, etc.";
        $category->save();

        $category = new Category();
        $category->name = "Limpieza";
        $category->description = "Productos de limpieza para el hogar";
        $category->save();

        $category = new Category();
        $category->name = "Higiene Personal";
        $category->description = "Productos de higiene personal: jabón, shampoo, pasta dental, etc.";
        $category->save();

        $category = new Category();
        $category->name = "Bebidas Alcohólicas";
        $category->description = "Vinos, cervezas, y otras bebidas alcohólicas";
        $category->save();
    }
}
