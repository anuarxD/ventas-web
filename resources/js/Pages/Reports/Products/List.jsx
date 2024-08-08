import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, Head } from "@inertiajs/react";

export default function List({ auth }) {

    const { products } = usePage().props;

    return (
        <AuthenticatedLayout user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Reportes de productos</h2>}>
            <Head title="Report Product" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between item-center pb-2'>

                            </div>
                            <div>
                                <table className='min-w-full'>
                                    <thead className='uppercase text-white'>
                                        <tr>
                                            <th className='bg-gray-500 py-2'>Productos</th>
                                            <th className='bg-gray-500 py-2'>Stock</th>
                                            <th className='bg-gray-500 py-2'>Categorias</th>
                                        </tr>
                                    </thead>
                                    < tbody>
                                        {products.map(product => (
                                            <tr key={product.id} className='hover: bg-gray-200'>
                                                <td className="py-2 px-3 border border-gray-300">{product.name}</td>
                                                <td className="py-2 px-3 border border-gray-300">{product.quantity}</td>
                                                <td className="py-2 px-3 border border-gray-300">{product.category.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </AuthenticatedLayout >
    )
}