import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, Head } from "@inertiajs/react";
import { useState} from 'react';
import Form from './Form';
import TextInput from '@/Components/TextInput';

export default function Index({ auth }) {

    const { categories } = usePage().props;
    const [searchCategory, setSearchCategory] = useState('');
    //console.log(categories);

    const filteredCategory = categories.data.filter(
        category => category.name.toLowerCase().includes(searchCategory.toLowerCase())
    )
    return (
        <AuthenticatedLayout user={auth.user} 
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Categorías</h2>}>
            <Head title="Categorias" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between item-center pb-2'>
                                <TextInput isFocused={true} type="text" name="search" placeholder="Buscar..." onChange={(event) => setSearchCategory(event.target.value)} />
                                {/*<input type="text" name="search" placeholder="Buscar..." onChange={(event) => setSearchCategory(event.target.value)} />*/}
                                <Form />
                            </div>
                            <div>
                                <table className='min-w-full'>
                                    <thead className='uppercase text-white'>
                                        <tr>
                                            <th className='bg-gray-500 py-2'>Nombre</th>
                                            <th className='bg-gray-500 py-2'>Descripcion</th>
                                            <th className='bg-gray-500 py-2'>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCategory.map(category => (
                                            <tr key={category.id} className='hover:bg-gray-300'>
                                                <td className='py-2 px-3 border border-gray-500'>{category.name}</td>
                                                <td className='py-2 px-3 border border-gray-500'>{category.description}</td>
                                                <td className='py-2 px-3 border border-gray-500'>
                                                    <Form id={category.id} category={category} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className='pt-2'>
                                    {categories.links.map((link, index) => (
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