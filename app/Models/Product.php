<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo; // palabra reservada para un producto pertenece a una categoria
use Illuminate\Database\Eloquent\Relations\BelongsToMany; // palabra reservada para muchos a muchos

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';

    public function category() : BelongsTo
    {
        return $this->belongsTo(Category::class); 
    }
    public function buys() : BelongsToMany
    {
        return $this->belongsToMany(Buy::class);  // relacion de muchos a muchos entre compras y productos
    }
    public function sales() : BelongsToMany
    {
        return $this->belongsToMany(Sale::class);  // relacion de muchos a muchos entre ventas y productos
    }
}
