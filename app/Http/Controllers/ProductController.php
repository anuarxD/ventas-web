<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $categories = Category::all();  
        $products = Product::with(['category'])->get();
        
        return inertia::render('Products/Index',['products'=>$products, 'categories'=>$categories]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {   
        $categories = Category::all();

        return Inertia::render('Products/Create',['categories' => $categories]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|max:75|unique:products,name',
            'salePrice' => 'required',
            'status' => 'required'
        ]);
        DB::beginTransaction();
        try {
            $product = new Product($request->all()); //para poder aplicar esto tiene que estar el fillable en el modelo 
            //$product->name = $request->name;
            //$product->salePrice = $request->salePrice;
            //$product->quantity = $request->quantity;
            //$product->status = $request->status;
            //$product->category_id = $request->category_id;
            $product->save();
    
            if ($request->hasFile('image')) {
                $image_path = 'public/images';
                $image = $request->file('image');
                $name_image = time()."-". $image->getClientOriginalName();
                $request->file('image')->storeAs($image_path,$name_image);
                $product->image()->create(['url' => $name_image]);
            }
            DB::commit();
            return redirect()->route('products.index');

        } catch (Exception $exc) {
            DB::rollBack();
            return redirect()->route('products.index'); //->with('error', $exc->getMessage());
        }
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);
       // $categories = Category::all();
       //dd($product->image->url); 
       return Inertia::render('Products/Show', ['product' => $product]);  
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::find($id);
        $categories = Category::all();
        return Inertia::render('Products/Edit', ['product' => $product, 'categories' => $categories]);  
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);
        $product->name = $request->name;
        $product->salePrice = $request->salePrice;
        $product->quantity = $request->quantity;
        $product->status = $request->status;
        $product->category_id = $request->category_id;
        $product->save();

        if ($request->hasFile('image')) {
            $image_path = 'public/images';
            $image = $request->file('image');
            $name_image = time()."-". $image->getClientOriginalName();
            $request->file('image')->storeAs($image_path,$name_image);
            $product->image()->update(['url' => $name_image]);
        }
        //dd('ok');
        return redirect()->route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        $product->delete();
        //dd($product);
        return redirect()->route('products.index');  //->with('status', 'Producto eliminado correctamente.');
    }
}
