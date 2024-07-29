import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import Form from './Form';
import TextInput from '@/Components/TextInput';


export default function Index({ auth }) {

    const { clients } = usePage().props;
    const [searchClient, setSearchClient] = useState('');
    console.log(clients);
 
     const filteredClient = clients.filter(
         client => client.fullName.toLowerCase().includes(searchClient.toLowerCase())
     )
    return (
        <AuthenticatedLayout user={auth.user}  
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Clientes</h2>}
        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between item-center pb-2'>
                                <TextInput isFocused={true} type="text" name="search" placeholder="Buscar nombre del cliente..." onChange={(event) => setSearchClient(event.target.value)} />
                                <Form />
                            </div>
                            <div>
                                <table className='min-w-full'>
                                    <thead className='uppercase text-white'>
                                        <tr>
                                            <th className='bg-gray-500 py-2'>RFC</th>
                                            <th className='bg-gray-500 py-2'>Nombre Completo</th>
                                            <th className='bg-gray-500 py-2'>Nombre(s)</th>
                                            <th className='bg-gray-500 py-2'>Apellido(s)</th>
                                            <th className='bg-gray-500 py-2'>Correo</th>
                                            <th className='bg-gray-500 py-2'>Celular</th>
                                            <th className='bg-gray-500 py-2'>Dirección</th>
                                            <th className='bg-gray-500 py-2'>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredClient.map(client => (
                                            <tr key={client.id} className='hover:bg-gray-300'>
                                                <td className='py-2 px-3 border border-gray-500'>{client.rfc}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{client.fullName}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{client.firstName}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{client.lastName}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{client.email}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{client.cellPhone}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{client.address}</td>
                                                <td className='py-2 px-3 border border-gray-500'>
                                                    <Form id={client.id} client={client} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </AuthenticatedLayout>
    )
}