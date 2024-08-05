<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo; // palabra reservada para un producto pertenece a una categoria
use Illuminate\Database\Eloquent\Relations\BelongsToMany; 
use Illuminate\Database\Eloquent\Relations\MorphOne; //polioformicamente un producto a una imagen
use App\Models\Image; // modelo de imagenes que se relaciona con productos

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';

    protected $fillable = ['name','barCode', 'salePrice','quantity','status','category_id'];

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
    public function image() : MorphOne
    {
        return $this->morphOne(Image::class, 'imageable'); // uno a uno poliformicamente 
    }
}
