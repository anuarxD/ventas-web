<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany; // un cliente puede tener muchas ventas

class Client extends Model
{
    use HasFactory;
    protected $table = 'clients';
    
    public function sales() : HasMany
    {
        return $this->hasMany(Sale::class);
    }
}
