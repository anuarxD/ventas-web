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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name',75)->unique();
            $table->string('barCode',75)->unique();
            $table->decimal('salePrice',8,2); // precio de venta -> nombre, numero de enteros y el ultomo valor son los decimales; // se corrige nombre de la columna
            $table->integer('quantity')->default(0); // aqui estamos por niendo por defecto el valor cero
            $table->enum('status',['Activo','Descontinuado'])->default('Activo'); //enmum nos permite limitar los tiopos de valores que se registran enn la tabla
            
            //crearemos la llave foranea para la ligar las categorias
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade'); 
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
