<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Buy extends Model
{
    use HasFactory;
    protected $table = 'buys';
    
    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class);
    }
    
    public function provider(): BelongsTo
    {
        return $this->belongsTo(Provider::class); 
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);  // una compra pertenece a un usuario
    }
}
