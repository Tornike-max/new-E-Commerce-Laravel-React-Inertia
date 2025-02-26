<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Color;
use App\Models\Product;
use App\Models\Size;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function index()
    {
        $products = Product::query()->with(['vendor', 'categories', 'colors', 'sizes'])->orderBy('created_at', 'asc')->get();

        if ($products->isEmpty()) {
            $products = null;
        }

        return inertia('Admin/Products/Index', [
            'products' => $products
        ]);
    }

    public function show(Product $product)
    {
        $singleProduct = Product::query()->with(['vendor', 'categories', 'colors', 'sizes'])->where('id', $product['id'])->first();
        return inertia("Admin/Products/Show", [
            'product' => $singleProduct
        ]);
    }

    public function create()
    {
        $sizes = Size::query()->orderBy("name",'asc')->get();
        $colors = Color::query()->orderBy("name","asc")->get();
        $categories = Category::query()->orderBy('name','asc')->get();

        
        return inertia("Admin/Products/Create",[
            "sizes"=>$sizes,
            "colors"=>$colors,
            'categories'=>$categories
        ]);
    }


public function store(Request $request)
{
    // ვალიდაცია
    $validatedData = $request->validate([
        'name' => 'required|min:2|string',
        'price' => 'required|numeric',
        'count' => 'required|numeric',
        'status' => 'required|string',
        'description' => 'required|string',
        'size' => 'required|string',
        'color' => 'required|string',
        'category' => 'required|exists:categories,id'
    ]);

    // slug-ის გენერაცია
    $slug = Str::slug($validatedData['name']); // slug პროდუქტის სახელიდან

    // პროდუქტის მონაცემების შესაქმნელად
    $productData = [
        "name" => $validatedData['name'],
        'price' => $validatedData['price'],
        'count' => $validatedData['count'],
        "status" => $validatedData['status'],
        "description" => $validatedData['description'],
        'vendor_id' => Auth::id(),
        'slug' => $slug // slug-ი პროდუქტის სახელიდან
    ];

    // პროდუქტის შენახვა
    $product = Product::create($productData);

    // slug-ის დამატება კატეგორიაში
    Category::create([
        'name' => $validatedData['category'],
        'slug' => $slug // slug-ის დამატება
    ]);

    // პროდუქტის კატეგორიაში დაკავშირება
    $product->categories()->attach($validatedData['category']);

    // პროდუქტის ზომის და ფერის დაკავშირება
    $product->sizes()->attach($validatedData['size']);
    $product->colors()->attach($validatedData['color']);

    // დაბრუნება admin გვერდზე
    return redirect()->route("admin");
}


    public function edit(Product $product)
    {
        return inertia('Admin/Products/Edit', [
            'product' => $product
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'name' => 'nullable|string',
            'price' => 'nullable|numeric',
            'count' => 'nullable|numeric',
            'status' => 'nullable|string',
            'description' => 'nullable|string'
        ]);

        $product->update($validatedData);

        return redirect()->route('admin');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('admin');
    }
}
