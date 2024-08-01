<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Mail\ClientMail;
use Exception;
use Illuminate\Support\Facades\Mail;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = Client::paginate(10);
        return Inertia::render('Clients/Index', ['clients' => $clients]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Clients/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        $request->validate([
            'rfc' => 'required',
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required',
            'cellPhone' => 'required|max:18',]);

        try {
            $client = new Client();
        $client->rfc = $request->rfc;
        $client->firstName = $request->firstName;
        $client->lastName = $request->lastName;
        $client->fullName = $request->firstName.' '.$request->lastName;
        $client->email = $request->email;
        $client->cellPhone = $request->cellPhone;
        $client->address = $request->address;
        $client->save();

        //enviar correo electronico
        if($client->email !== ""){
            Mail::to($request->email)->send(new ClientMail($client)); 
        }

        

        return Redirect::route('clients.index')->with(['status' => true, 'message' => 'El cliente fue registrado con éxito']);
        } catch (Exception $e) {
            return Redirect::route('clients.index')->with(['status' => false, 'message' => 'Existen errores en el registro: '.$e->getMessage()]);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $client = Client::find($id);
        return Inertia::render('Client/Show', ['client' => $client]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $client = Client::findOrFail($id);
        return Inertia::render('Clients/Edit', ['client' => $client]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {   
        $request->validate([
            'rfc' => 'required',
            'firstName' => 'required',
            'lastName' => 'required',
            'cellPhone' => 'required|max:18',]);
            
        $client = Client::find($id);
        $client->rfc = $request->rfc;
        $client->firstName = $request->firstName;
        $client->lastName = $request->lastName;
        $client->fullName = $request->firstName.' '.$request->lastName;
        $client->email = $request->email;
        $client->cellPhone = $request->cellPhone;
        $client->address = $request->address;
        $client->save();

        return Redirect::route('clients.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $client = Client::find($id);
        $client->delete();
        return Redirect::route('clients.index');
    }
}