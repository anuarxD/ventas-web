<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ErrorController extends Controller
{
    /**
     * Muestra una página de error 403.
     *
     * @return \Inertia\Response
     */
    public function error403()
    {
        return Inertia::render('Errors/Error403');
    }
}
