<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permission = Permission::create(['name' => 'listado categorias']);
        $permission = Permission::create(['name' => 'crear categorias']);
        $permission = Permission::create(['name' => 'editar categorias']);
        $permission = Permission::create(['name' => 'eliminar categorias']);

        $permission = Permission::create(['name' => 'listado proveedores']);
        $permission = Permission::create(['name' => 'crear proveedores']);
        $permission = Permission::create(['name' => 'editar proveedores']);
        $permission = Permission::create(['name' => 'eliminar proveedores']);

        $permission = Permission::create(['name' => 'listado productos']);
        $permission = Permission::create(['name' => 'crear productos']);
        $permission = Permission::create(['name' => 'editar productos']);
        $permission = Permission::create(['name' => 'eliminar productos']);

        $permission = Permission::create(['name' => 'listado clientes']);
        $permission = Permission::create(['name' => 'crear clientes']);
        $permission = Permission::create(['name' => 'editar clientes']);
        $permission = Permission::create(['name' => 'eliminar clientes']);

    }
}
