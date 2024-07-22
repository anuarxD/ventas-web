<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany; // un provedor tiene muchas compras

class Provider extends Model
{
    use HasFactory;
    protected $table = 'providers';

    public function buys() : HasMany
    {
        return $this->hasMany(Buy::class);
    }
}
