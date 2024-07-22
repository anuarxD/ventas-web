<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo; // palabra reservada para una venta pertenece a un cliente


class Sale extends Model
{
    use HasFactory;
    protected $table = 'sales';

    public function products() : BelongsToMany
    {
        return $this->belongsToMany(Product::class);  // relacion de muchos a muchos entre ventas y productos
    }
    public function client() : BelongsTo
    {
        return $this->belongsTo(Client::class); 
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);  // una compra pertenece a un usuario
    }
}
