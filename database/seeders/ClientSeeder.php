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
        DB::table('clients')->insert([
            'rfc' => 'XAXX010101000',
            'fullName' => 'Anuar Rodríguez',
            'firstName' => 'Anuar',
            'lastName' => 'Rodríguez',
            'cellPhone' => '5555555555',
            'address' => 'Calle 123, Colonia 456, Ciudad 789, CP 12345',
            'email' => 'anuar@gmail.com'
        ]);

        DB::table('clients')->insert([
            'rfc' => 'BEXX020202111',
            'fullName' => 'María López',
            'firstName' => 'María',
            'lastName' => 'López',
            'cellPhone' => '6666666666',
            'address' => 'Calle 456, Colonia 789, Ciudad 901, CP 23456',
            'email' => 'maria@gmail.com'
        ]);

        DB::table('clients')->insert([
            'rfc' => 'CAXX030303222',
            'fullName' => 'Juan Pérez',
            'firstName' => 'Juan',
            'lastName' => 'Pérez',
            'cellPhone' => '7777777777',
            'address' => 'Calle 789, Colonia 901, Ciudad 123, CP 34567',
            'email' => 'juan@gmail.com',
        ]);

        DB::table('clients')->insert([
            'rfc' => 'DAXX040404333',
            'fullName' => 'Laura Martínez',
            'firstName' => 'Laura',
            'lastName' => 'Martínez',
            'cellPhone' => '8888888888',
            'address' => 'Calle 901, Colonia 123, Ciudad 456, CP 45678',
            'email' => 'laura@gmail.com',
        ]);

        DB::table('clients')->insert([
            'rfc' => 'EAXX050505444',
            'fullName' => 'Carlos Hernández',
            'firstName' => 'Carlos',
            'lastName' => 'Hernández',
            'cellPhone' => '9999999999',
            'address' => 'Calle 456, Colonia 789, Ciudad 234, CP 56789',
            'email' => 'carlos@gmail.com',
        ]);
    }
}