<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Color;
use App\Models\Product;
use App\Models\Size;
use App\Models\User;
use App\Models\Vendor;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //Vendor::factory()->create();

        //Product::factory()->create();

        // $sizes = [
        //     ['name' => 'XS'],
        //     ['name' => 'S'],
        //     ['name' => 'M'],
        //     ['name' => 'L'],
        //     ['name' => 'XL'],
        //     ['name' => 'XXL'],
        // ];

        // Size::insert($sizes);

        $categories = [
            ['name' => 'Electronics'],
            ['name' => 'Computers & Accessories'],
            ['name' => 'Smartphones'],
            ['name' => 'Cameras & Photography'],
            ['name' => 'TV & Home Entertainment'],
            ['name' => 'Audio & Headphones'],
            ['name' => 'Wearable Technology'],
            ['name' => 'Gaming Consoles'],
            ['name' => 'Home Appliances'],
            ['name' => 'Kitchen Appliances'],
            ['name' => 'Furniture'],
            ['name' => 'Home Decor'],
            ['name' => 'Bedding & Bath'],
            ['name' => 'Tools & Home Improvement'],
            ['name' => 'Garden & Outdoor'],
            ['name' => 'Toys & Games'],
            ['name' => 'Baby Products'],
            ['name' => 'Books'],
            ['name' => 'Movies & TV Shows'],
            ['name' => 'Music'],
            ['name' => 'Clothing'],
            ['name' => 'Shoes'],
            ['name' => 'Watches'],
            ['name' => 'Jewelry'],
            ['name' => 'Beauty & Personal Care'],
            ['name' => 'Health & Wellness'],
            ['name' => 'Sports & Outdoors'],
            ['name' => 'Fitness & Exercise'],
            ['name' => 'Automotive'],
            ['name' => 'Motorcycles & Powersports'],
            ['name' => 'Industrial & Scientific'],
            ['name' => 'Pet Supplies'],
            ['name' => 'Office Supplies'],
            ['name' => 'Art & Craft'],
            ['name' => 'Groceries'],
            ['name' => 'Alcohol & Beverages'],
            ['name' => 'Specialty Food'],
            ['name' => 'Handmade Products'],
            ['name' => 'Collectibles'],
        ];

        foreach ($categories as $categorie) {
            Category::factory()->create([
                'name' => $categorie['name'],
                'slug' => Str::slug($categorie['name'])
            ]);
        }
    }
}
