<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User; // Cambia esto si usas un modelo diferente
use Spatie\Permission\Models\Role;

class ModelHasRolesTableSeeder extends Seeder
{
    public function run()
    {
        // Obtén el usuario al que deseas asignar roles
        $user = User::find(1); // Cambia el ID según sea necesario
        // Asigna un rol al usuario
        $role = Role::findByName('Administrador'); // Cambia el nombre del rol según sea necesario
        $user->assignRole($role);

        $user = User::find(2);
        $role = Role::findByName('Gerente');
        $user->assignRole($role);

        $user = User::find(3);
        $role = Role::findByName('Vendedor');
        $user->assignRole($role);
    }
}
