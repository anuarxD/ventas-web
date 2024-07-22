Route::get('/test',function(){
    
    //Para registrar
    //$category = new Category();
    //$category->name = 'Aguas y gaseosas';
    //$category->save();
    
    //Para ver todas las categorias
    //$categories = Category::all();
    //$categories = Category::where('id','=',1)->select('name')->get(); // consulta por ID
    //$categories = Category::where('name','=', 'Aguas y gaseosas')->select('id','name')->get(); // consulta por nombre
    //return view('test',['category' => $categories]);

    //Para registrar productos
    //$product = new Product();
    //$product->name = 'Agua Mineral';
    //$product->salePrice = 12.00;
    //$product->quantity = 80;
    //$product->status = "Activo";
    //$product->category_id = 2; // id de la categoria
    //$product->save();
    //return view('test',['product'=> $product]);

    //para ver todos los productos
    //$products = Product::all();
    // $products = Product::where('id','=',2)->select('name')->get();
    //return view('test',['product'=> $products]);

    //ver productos de una categoria
    //$category = Category::where('name','=','Aguas y gaseosas')->first();
    //return view('test',['category'=> $category]);

    //ver productos con sus respectivas categorias
    $products = Product::all();
    return view('test',['products'=>$products]);
    
    //consultas como SQL
    //$products = DB::table('products')->join('categories', 'categories.id','=','products.category_id')->select('products.name','categories.name as category_name')->get();
    //return view('test',['products'=>$products]);

});