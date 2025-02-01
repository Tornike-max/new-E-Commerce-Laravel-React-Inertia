<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $products = Product::query()->with(['vendor', 'categories', 'colors', 'sizes'])->orderBy('created_at', 'asc')->get();

        if ($products->isEmpty()) {
            $products = null;
        }

        return inertia('Admin/Index', [
            'products' => $products
        ]);
    }

    public function show(Product $product)
    {
        $singleProduct = Product::query()->with(['vendor', 'categories', 'colors', 'sizes'])->where('id', $product['id'])->first();
        return inertia("Admin/Show", [
            'product' => $singleProduct
        ]);
    }

    public function edit(Product $product)
    {
        return inertia('Admin/Edit', [
            'product' => $product
        ]);
    }
}
