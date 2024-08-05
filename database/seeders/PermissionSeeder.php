<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {   
        $permission = Permission::create(['name' => 'listado ventas']);
        $permission = Permission::create(['name' => 'crear ventas']);
        $permission = Permission::create(['name' => 'editar ventas']);
        $permission = Permission::create(['name' => 'eliminar ventas']);

        $permission = Permission::create(['name' => 'listado categorias']);
        $permission = Permission::create(['name' => 'crear categorias']);
        $permission = Permission::create(['name' => 'editar categorias']);
        $permission = Permission::create(['name' => 'eliminar categorias']);

        $permission = Permission::create(['name' => 'listado proveedores']);
        $permission = Permission::create(['name' => 'crear proveedores']);
        $permission = Permission::create(['name' => 'editar proveedores']);
        $permission = Permission::create(['name' => 'eliminar proveedores']);

        $permission = Permission::create(['name' => 'listado clientes']);
        $permission = Permission::create(['name' => 'crear clientes']);
        $permission = Permission::create(['name' => 'editar clientes']);
        $permission = Permission::create(['name' => 'eliminar clientes']);

        $permission = Permission::create(['name' => 'listado productos']);
        $permission = Permission::create(['name' => 'crear productos']);
        $permission = Permission::create(['name' => 'editar productos']);
        $permission = Permission::create(['name' => 'eliminar productos']);

        $permission = Permission::create(['name' => 'listado roles']);
        $permission = Permission::create(['name' => 'crear roles']);
        $permission = Permission::create(['name' => 'editar roles']);
        $permission = Permission::create(['name' => 'eliminar roles']);

        $permission = Permission::create(['name' => 'listado usuarios']);
        $permission = Permission::create(['name' => 'crear usuarios']);
        $permission = Permission::create(['name' => 'editar usuarios']);
        $permission = Permission::create(['name' => 'eliminar usuarios']);

        // Crear roles y asignar permisos
        Role::create(['name' => 'Administrador'])->givePermissionTo(Permission::all());
        Role::create(['name' => 'Gerente'])->givePermissionTo(['listado ventas','crear ventas','editar ventas','listado proveedores', 'listado categorias', 'listado productos', 'listado clientes']);
        Role::create(['name' => 'Vendedor'])->givePermissionTo('listado ventas','crear ventas','listado productos', 'crear productos','listado clientes', 'crear clientes');
    }
}
