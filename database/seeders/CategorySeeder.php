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
        $category->name = "Aguas y gaseosas";
        $category->save();

        $category2 = new Category();
        $category2->name = "Carnes";
        $category2->description = "Productos de carnes";
        $category2->save();
        
        $category3 = new Category();
        $category3->name = "Limpieza";
        $category3->save();
    }
}
