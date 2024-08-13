import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, Head } from "@inertiajs/react";


export default function List({ auth }) {

    const { sales} = usePage().props;
    console.log(sales);     

    const calculateTotal = (products) => {
        return products.reduce((total, product) => total + (product.pivot.salePrice * product.pivot.quantity), 0).toFixed(2);
    }

    return (
        <AuthenticatedLayout user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Reportes de Ventas</h2>}>
            <Head title="Reporte Ventas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-end item-center pb-6 space-x-2'>
                                <a href={route('reports.stock.products.pdf')}  target="_blank" className='bg-red-500 hover:bg-red-600 active:bg-red-700 py-2 px-4 rounded-md text-white'>IMPRIMIR PDF</a>
                                <a href={route('reports.stock.products.excel')} className='bg-green-500 hover:bg-green-600 active:bg-green-700 py-2 px-4 rounded-md text-white'>EXPORTAR EXCEL</a>
                            </div>
                            <div>
                                <table className='min-w-full'>
                                    <thead className='uppercase text-white'>
                                        <tr>
                                            <th className='bg-gray-500 py-2'>Fecha</th>
                                            <th className='bg-gray-500 py-2'>Cliente</th>
                                            <th className='bg-gray-500 py-2'>Usuario</th>
                                            <th className='bg-gray-500 py-2'>SubTotal</th>
                                        </tr>
                                    </thead>
                                    < tbody>
                                        {sales.map(sale => (
                                            <tr key={sale.id} className='hover: bg-gray-200'>
                                                <td className="py-2 px-3 border border-gray-300">{sale.sale_date}</td>
                                                <td className="py-2 px-3 border border-gray-300">{sale.client.fullName}</td>
                                                <td className="py-2 px-3 border border-gray-300">{sale.user.name}</td>
                                                <td className="py-2 px-3 border border-gray-300">${calculateTotal(sale.products)}</td>
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