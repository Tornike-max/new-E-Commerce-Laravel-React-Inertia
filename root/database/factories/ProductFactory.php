<?php

namespace Database\Factories;

use App\Models\Size;
use App\Models\Vendor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'vendor_id' => 1,
            'name' => 'Test Product Name',
            'description' => 'Test Product Description',
            'price' => 250,
            'image' => fake()->imageUrl(),
            'count' => 10,
            'status' => 'active',
        ];
    }
}
