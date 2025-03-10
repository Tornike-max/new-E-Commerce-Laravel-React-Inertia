<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [MainController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/admin', [AdminController::class, 'index'])->middleware('auth')->name('admin');
Route::get('/admin/product/create', [AdminController::class, 'create'])->middleware('auth')->name('admin.create.product');
Route::post('/admin/store/product', [AdminController::class, 'store'])->middleware('auth')->name('admin.store.product');
Route::get('/admin/show/{product}', [AdminController::class, 'show'])->middleware('auth')->name('admin.show.product');
Route::get('/admin/{product}/edit', [AdminController::class, 'edit'])->middleware('auth')->name('admin.product.edit');
Route::put('/admin/update/{product}', [AdminController::class, 'update'])->middleware('auth')->name('admin.product.update');
Route::delete('/admin/delete/{product}', [AdminController::class, 'destroy'])->middleware('auth')->name('admin.product.delete');

require __DIR__ . '/auth.php';
