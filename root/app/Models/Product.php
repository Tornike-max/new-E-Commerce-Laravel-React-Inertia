<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'count',
        'status',
        'description',
        'vendor_id'
    ];


    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function vendor(): BelongsTo
    {
        return $this->belongsTo(Vendor::class);
    }

    public function colors()
    {
        return $this->belongsToMany(Color::class, 'product_color_size');
    }

    public function sizes()
    {
        return $this->belongsToMany(Size::class, 'product_color_size');
    }
}
