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
            'lastName' => 'Rodríguez'
        ]);

        DB::table('clients')->insert([
            'rfc' => 'BEXX020202111',
            'fullName' => 'María López',
            'firstName' => 'María',
            'lastName' => 'López'
        ]);

        DB::table('clients')->insert([
            'rfc' => 'CAXX030303222',
            'fullName' => 'Juan Pérez',
            'firstName' => 'Juan',
            'lastName' => 'Pérez'
        ]);

        DB::table('clients')->insert([
            'rfc' => 'DAXX040404333',
            'fullName' => 'Laura Martínez',
            'firstName' => 'Laura',
            'lastName' => 'Martínez'
        ]);

        DB::table('clients')->insert([
            'rfc' => 'EAXX050505444',
            'fullName' => 'Carlos Hernández',
            'firstName' => 'Carlos',
            'lastName' => 'Hernández'
        ]);
    }
}