<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Client;
use App\Models\User;
use App\Models\Sale;
use App\Models\Provider;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(CategorySeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(ClientSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(ProviderSeeder::class);


        //factory para poder crear la tabla intermedia de producto-venta
        $products = Product::factory(5)->create();
        Client::factory(10)->create();
        $sales =Sale::factory(10)->create();

        //Aqui esta la informacion enlazada entre producto y venta
        $products->each(function ($product) use ($sales){
            $product->sales()->attach($sales->random()->id, ['quantity' => 2, 'salePrice' => 10 ]);
        });


        // User::factory(10)->create();

//        User::factory()->create([
//           'name' => 'Test User',
//            'email' => 'test@example.com',
//        ]);
    }
}
