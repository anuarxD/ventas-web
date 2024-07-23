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
         $user->name = "Administrador";
         $user->email = "admin@example.com";
         $user->password = bcrypt('password');
         $user->status = true;
         $user->save();
    }
}
