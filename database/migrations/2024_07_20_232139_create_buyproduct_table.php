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
        Schema::create('buyproduct', function (Blueprint $table) {
            $table->id();
            $table->decimal('buyPrice',8,2)-> default(0); //precio que lo compré, numero de enteros y numero de decimales
            $table->integer('quantity')->default(0); // cantidad que compré

            //relacion con la compras
            $table->unsignedBigInteger('buyId');
            $table->foreign('buyId')->references('id')->on('buys')->onDelete('cascade');

            //relacion con los productos
            $table->unsignedBigInteger('productId');
            $table->foreign('productId')->references('id')->on('products')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('buyproduct');
    }
};
