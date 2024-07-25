<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();
        //dd(csrf_token()); 
       //return view('categories.index', compact('categories')); así seria si es blade / laravel ... (sería mas o menos así)
       return Inertia::render('Categories/Index', ['categories' => $categories]);
    }

    public function test()
    {
        $categories = Category::all();
        //dd(csrf_token()); 
       //return view('categories.index', compact('categories')); así seria si es blade / laravel ... (sería mas o menos así)
       return Inertia::render('Categories/Test', ['categories' => $categories]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {   
        return Inertia::render('Categories/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $category = new Category();
        $category->name = $request->name;
        $category->description = $request->description;
        $category->save();

        //dd($category);
        return Redirect::route('categories.index');  //->with('status', 'Categoría creada correctamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::find($id);
        return Inertia::render('Categories/Show', ['category' => $category]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Categories/Edit', ['category' => $category]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::find($id);
        $category->name = $request->name;
        $category->description = $request->description;
        $category->save();

        return Redirect::route('categories.index'); //->with('status', 'Categoría actualizada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);
        $category->delete();

        return Redirect::route('categories.index');  //->with('status', 'Categoría eliminada correctamente.');
    }
}
