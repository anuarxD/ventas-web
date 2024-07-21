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
        Schema::create('buys', function (Blueprint $table) {
            $table->id();
            $table->timestamp('buyDate');
            
            //relacion con proveedores
            $table->unsignedBigInteger('providerId');
            $table->foreign('providerId')->references('id')->on('providers');

            //relacion con el usuario que hace la compra del producto a los proveedores
            $table->unsignedBigInteger('userId');
            $table->foreign('userId')->references('id')->on('users');
                      
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('buys');
    }
};
