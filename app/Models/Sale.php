<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo; // palabra reservada para una venta pertenece a un cliente
use Illuminate\Database\Eloquent\Casts\Attribute;
use Carbon\Carbon;

class Sale extends Model
{
    use HasFactory;
    protected $table = 'sales';
    protected $fillable = ['sale_date', 'client_id', 'user_id'];

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class)->withPivot('salePrice', 'quantity');;  // relacion de muchos a muchos entre ventas y productos
    }
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);  // una compra pertenece a un usuario
    }

    protected function saleDate(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                return Carbon::parse($value)->format('d/m/Y H:i');
            }
        );
    }
}
