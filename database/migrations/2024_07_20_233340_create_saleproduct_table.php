<?php

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
        Schema::create('saleproduct', function (Blueprint $table) {
            $table->id();
            $table->decimal('salePrice',8,2)-> default(0); //precio de la venta, numero de enteros y numero de decimales
            $table->integer('quantity')->default(0); // cantidad que vendí

            $table->unsignedBigInteger('productId');
            $table->foreign('productId')->references('id')->on('products')->onDelete('cascade');

            $table->unsignedBigInteger('saleId');
            $table->foreign('saleId')->references('id')->on('sales')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saleproduct');
    }
};