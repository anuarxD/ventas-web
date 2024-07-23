<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;// no usaremos eloquent, usaremos consultas directas de sql

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $client = DB::table('clients')->insert(['rfc'=>'XAXX010101000', 'fullName'=>'Anuar Rodríguez','firstName'=>'Anuar','lastName'=>'Rodríguez']);
    }
}