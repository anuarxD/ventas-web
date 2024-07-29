<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'rfc' => $this->faker->postcode(),
            'fullname' => $this->faker->firstName().' '.$this->faker->lastName(),
            'firstName' => $this->faker->firstName(),
            'lastName' => $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail(),  //unique() para que no se repita el email
            'cellPhone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
        ];
    }
}
