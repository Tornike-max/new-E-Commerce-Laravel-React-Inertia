<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Color>
 */
class ColorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $colors = [
            ['name' => 'Blue'],
            ['name' => 'Green'],
            ['name' => 'Black'],
            ['name' => 'White'],
            ['name' => 'Yellow'],
            ['name' => 'Purple'],
            ['name' => 'Orange'],
            ['name' => 'Pink'],
            ['name' => 'Gray'],
            ['name' => 'Brown'],
        ];

        return $colors;
    }
}
