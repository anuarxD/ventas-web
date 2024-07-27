<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Provider;

class ProviderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $provider = new Provider();
        $provider->company = "Coca Cola";
        $provider->contact = "Edder Gonzalez";
        $provider->cellPhone = 9831234567;
        $provider->address = "Domicilio conocido, Chetumal, Quintana Roo, México";
        $provider->email = "prueba@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Pepsi";
        $provider->contact = "Juan Perez";
        $provider->cellPhone = 9831234568;
        $provider->address = "Calle Falsa 123, Mérida, Yucatán, México";
        $provider->email = "pepsi@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Bimbo";
        $provider->contact = "Maria Lopez";
        $provider->cellPhone = 9831234569;
        $provider->address = "Avenida Siempre Viva, Cancún, Quintana Roo, México";
        $provider->email = "bimbo@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Nestlé";
        $provider->contact = "Carlos Ramirez";
        $provider->cellPhone = 9831234570;
        $provider->address = "Calle Palma, Tulum, Quintana Roo, México";
        $provider->email = "nestle@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Lala";
        $provider->contact = "Ana Martinez";
        $provider->cellPhone = 9831234571;
        $provider->address = "Calle Mango, Playa del Carmen, Quintana Roo, México";
        $provider->email = "lala@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Kellogg's";
        $provider->contact = "Luis Hernandez";
        $provider->cellPhone = 9831234572;
        $provider->address = "Avenida Principal, Cozumel, Quintana Roo, México";
        $provider->email = "kelloggs@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Danone";
        $provider->contact = "Roberto Garcia";
        $provider->cellPhone = 9831234573;
        $provider->address = "Calle Sol, Bacalar, Quintana Roo, México";
        $provider->email = "danone@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Sabritas";
        $provider->contact = "Andrea Torres";
        $provider->cellPhone = 9831234574;
        $provider->address = "Calle Luna, Felipe Carrillo Puerto, Quintana Roo, México";
        $provider->email = "sabritas@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Barcel";
        $provider->contact = "Ricardo Alvarez";
        $provider->cellPhone = 9831234575;
        $provider->address = "Calle Estrella, Chetumal, Quintana Roo, México";
        $provider->email = "barcel@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Marinela";
        $provider->contact = "Isabel Diaz";
        $provider->cellPhone = 9831234576;
        $provider->address = "Calle Cometa, Chetumal, Quintana Roo, México";
        $provider->email = "marinela@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Herdez";
        $provider->contact = "Enrique Nunez";
        $provider->cellPhone = 9831234577;
        $provider->address = "Calle Neptuno, Chetumal, Quintana Roo, México";
        $provider->email = "herdez@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "La Costeña";
        $provider->contact = "Patricia Romero";
        $provider->cellPhone = 9831234578;
        $provider->address = "Calle Jupiter, Chetumal, Quintana Roo, México";
        $provider->email = "lacostena@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Gamesa";
        $provider->contact = "Fernando Ortiz";
        $provider->cellPhone = 9831234579;
        $provider->address = "Calle Saturno, Chetumal, Quintana Roo, México";
        $provider->email = "gamesa@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Galletas Cuétara";
        $provider->contact = "Silvia Vega";
        $provider->cellPhone = 9831234580;
        $provider->address = "Calle Venus, Chetumal, Quintana Roo, México";
        $provider->email = "cuetara@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Sigma Alimentos";
        $provider->contact = "Alejandro Ponce";
        $provider->cellPhone = 9831234581;
        $provider->address = "Calle Marte, Chetumal, Quintana Roo, México";
        $provider->email = "sigma@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Grupo Alpura";
        $provider->contact = "Gloria Herrera";
        $provider->cellPhone = 9831234582;
        $provider->address = "Calle Mercurio, Chetumal, Quintana Roo, México";
        $provider->email = "alpura@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Bachoco";
        $provider->contact = "Hugo Medina";
        $provider->cellPhone = 9831234583;
        $provider->address = "Calle Urano, Chetumal, Quintana Roo, México";
        $provider->email = "bachoco@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Gruma";
        $provider->contact = "Teresa Villanueva";
        $provider->cellPhone = 9831234584;
        $provider->address = "Calle Pluton, Chetumal, Quintana Roo, México";
        $provider->email = "gruma@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Pinsa Comercial";
        $provider->contact = "Armando Flores";
        $provider->cellPhone = 9831234585;
        $provider->address = "Calle Tierra, Chetumal, Quintana Roo, México";
        $provider->email = "pinsa@gmail.com";
        $provider->save();

        $provider = new Provider();
        $provider->company = "Grupo Bafar";
        $provider->contact = "Luisa Estrada";
        $provider->cellPhone = 9831234586;
        $provider->address = "Calle Fuego, Chetumal, Quintana Roo, México";
        $provider->email = "bafar@gmail.com";
        $provider->save();
    }
}
