import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, Head } from "@inertiajs/react";
import { useState } from 'react';
import Form from './Form';
import TextInput from '@/Components/TextInput';
import Show from './Show';

export default function Index({ auth }) {

    const { products, categories} = usePage().props;
    const [searchProduct, setSearchProduct] = useState('');

    const filteredProduct = products.data.filter(
        product => product.name.toLowerCase().includes(searchProduct.toLowerCase())
    )
    return (
        <AuthenticatedLayout user={auth.user} 
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Productos</h2>}>
            <Head title="Productos" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between item-center pb-2'>
                                <TextInput isFocused={true} type="text" name="search" placeholder="Buscar producto..." onChange={(event) => setSearchProduct(event.target.value)} />
                                <Form categories={categories}/>
                            </div>
                            <div>
                                <table className='min-w-full'>
                                    <thead className='uppercase text-white'>
                                        <tr>
                                            <th className='bg-gray-500 py-2'>Nombre</th>
                                            <th className='bg-gray-500 py-2'>Codigo de Barra</th>
                                            <th className='bg-gray-500 py-2'>Precio</th>
                                            <th className='bg-gray-500 py-2'>Cantidades</th>
                                            <th className='bg-gray-500 py-2'>Estatus</th>
                                            <th className='bg-gray-500 py-2'>Categorías</th>
                                            <th className='bg-gray-500 py-2'>Acciones</th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                            {filteredProduct.map(product => (
                                                <tr key={product.id} className='hover:bg-gray-300'>
                                                    <td className='py-2 px-3 border border-gray-500'>{product.name}</td>
                                                    <td className='py-2 px-3 border border-gray-500'>{product.barCode}</td>
                                                    <td className='py-2 px-3 border border-gray-500'>{product.salePrice}</td>
                                                    <td className='py-2 px-3 border border-gray-500'>{product.quantity}</td>
                                                    <td className='py-2 px-3 border border-gray-500'>{product.status}</td>
                                                    <td className='py-2 px-3 border border-gray-500'>{product.category.name}</td>
                                                    <td className='py-2 px-3 border border-gray-500 flex'>
                                                        <Form id={product.id} product={product} categories={categories}/>
                                                        <Show product={product} /> 
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                </table>
                                <div className='pt-2'>
                                    {products.links.map((link, index) => (
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