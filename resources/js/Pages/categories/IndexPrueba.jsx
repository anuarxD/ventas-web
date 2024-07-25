import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Index ({auth}){

    const [variableA, setVariableA] = useState(0);

    function sumar (){
        setVariableA(variableA + 1);
    }

    return (
     <AuthenticatedLayout user={auth.user} header='CATEGORIAS'>
        <div>
          <p>{variableA}</p>
          <button onClick={sumar}>Sumar</button>
        </div>
         

     </AuthenticatedLayout>
    )
}