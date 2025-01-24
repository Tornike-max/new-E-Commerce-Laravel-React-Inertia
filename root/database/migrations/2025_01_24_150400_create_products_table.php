<?php

use App\Models\Vendor;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Vendor::class)->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->longText('description')->nullable(); // ზოგი პროდუქტი შეიძლება მოკლე აღწერით იყოს
            $table->decimal('price', 10, 2)->unsigned(); // ფასი უარყოფითი ვერ უნდა იყოს
            $table->unsignedInteger('count')->default(0); // მარაგი 0-ით იწყოს და უარყოფითი არ იყოს
            $table->string('image')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active'); // განსაზღვრული სტატუსები
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
