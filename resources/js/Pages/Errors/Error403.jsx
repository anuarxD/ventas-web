import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Error403() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold">403 Forbidden</h1>
                <p className="mt-2">Usted no tiene permiso para acceder a esta página.</p>
                <button
                    onClick={() => Inertia.visit('/dashboard')}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Regresar a ventas
                </button>
            </div>
        </div>
    );
}