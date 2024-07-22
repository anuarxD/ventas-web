<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany; // palabra reservada 

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';

    public function products() : HasMany
    {
        return $this->hasMany(Product::class);
    }
}
