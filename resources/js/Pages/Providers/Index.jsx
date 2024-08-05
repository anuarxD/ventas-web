import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, Head } from "@inertiajs/react";
import { useState } from 'react';
import Form from './Form';
import TextInput from '@/Components/TextInput';

export default function Index({ auth }) {

    const { providers } = usePage().props;
    const [searchProvider, setSearchProvider] = useState('');

    const filteredProvider = providers.data.filter(
        provider =>
            provider.contact.toLowerCase().includes(searchProvider.toLowerCase()) ||
            provider.company.toLowerCase().includes(searchProvider.toLowerCase())

    )
    return (
        <AuthenticatedLayout user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Proveedores</h2>}>
            <Head title="Proveedores" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between item-center pb-2'>
                                <TextInput isFocused={true} type="text" name="search" placeholder="Buscar compañia o contacto..." onChange={(event) => setSearchProvider(event.target.value)} />
                                <Form />
                            </div>
                            <div>
                                <table className='min-w-full'>
                                    <thead className='uppercase text-white'>
                                        <tr>
                                            <th className='bg-gray-500 py-2'>Compañia</th>
                                            <th className='bg-gray-500 py-2'>Contacto</th>
                                            <th className='bg-gray-500 py-2'>No Celular</th>
                                            <th className='bg-gray-500 py-2'>Dirección</th>
                                            <th className='bg-gray-500 py-2'>Correo Electronico</th>
                                            <th className='bg-gray-500 py-2'>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredProvider.map(provider => (
                                            <tr key={provider.id} className='hover:bg-gray-300'>
                                                <td className='py-2 px-3 border border-gray-500'>{provider.company}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{provider.contact}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{provider.cellPhone}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{provider.address}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{provider.email}</td>
                                                <td className='py-2 px-3 border border-gray-500'>
                                                    <Form id={provider.id} provider={provider} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className='pt-2'>
                                    {providers.links.map((link, index) => (
                                        <a key={index} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} className={`bg-slate-400 px-2 py-1 mx-2 hover:bg-slate-500 ${link.active ? 'bg-slate-900 text-white' : 'bg-slate-300'}`} ></a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}