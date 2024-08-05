<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User; // Asegúrate de usar el modelo de usuario correcto
use Spatie\Permission\Models\Role;

class UserRoleSeeder extends Seeder
{
    public function run()
    {
        // Asigna roles a usuarios específicos
        $adminUser = User::where('email', 'administrador@example.com')->first();
        if ($adminUser) {
            $adminUser->assignRole('Administrador');
        }

        $editorUser = User::where('email', 'Gerente@example.com')->first();
        if ($editorUser) {
            $editorUser->assignRole('Gerente');
        }

        $regularUser = User::where('email', 'vendedor@example.com')->first();
        if ($regularUser) {
            $regularUser->assignRole('Vendedor');
        }
    }
}
