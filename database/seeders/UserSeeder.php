<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $user = new User();
         $user->matricula = "12341234";
         $user->name = "Administrador";
         $user->email = "admin@example.com";
         $user->password = bcrypt('password');
         $user->status = true;
         $user->save();

         $user = new User();
         $user->matricula = "12345678";
         $user->name = "Gerente";
         $user->email = "gerente@example.com";
         $user->password = bcrypt('password');
         $user->status = true;
         $user->save();

         $user = new User();
         $user->matricula = "87654321";
         $user->name = "Vendedor";
         $user->email = "vendedor@example.com";
         $user->password = bcrypt('password');
         $user->status = true;
         $user->save();
    }
}
