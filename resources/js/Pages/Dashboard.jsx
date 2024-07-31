import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import TextInput from '@/Components/TextInput';


export default function Dashboard({ auth }) {

    const { products, categories} = usePage().props;
    const [searchProduct, setSearchProduct] = useState('');
    const [searchCategory, setSearchCategory] = useState(0);


    const filteredProduct = products.filter(
        Number(searchCategory) === 0 ?
        product => product.name.toLowerCase().includes(searchProduct.toLowerCase())
        :
        product => {
            const auxFilterCategory = Number (product.category_id) === Number(searchCategory);
            const auxFilterProduct =  product.name.toLowerCase().includes(searchProduct.toLowerCase());

            return auxFilterCategory && auxFilterProduct;
        }
        
       
        
    )
    return (
        <AuthenticatedLayout
            user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
                    <div className=' grid grid-cols-4 gap-2'>
                        <div className=' col-span-3 bg-white shadow-sm'>

                            <div className='flex justify-between px-1 py-2'>
                            <TextInput isFocused={true} type="text" name="search" placeholder="Buscar producto..." onChange={(event) => setSearchProduct(event.target.value)} />
                                <div className='space-x-2'>
                                    <select onChange={(event) => setSearchCategory(event.target.value)}>
                                            <option value="0">Todos</option>
                                        {categories.map(category =>(
                                            <option key={category.id}value={category.id}>{category.name}</option>
                                        ))}
                                    </select>
                                    {/*<input type="text" placeholder='Categorias' />*/}
                                    <input type="text" placeholder='Código de Barra' /> {/* Codigo de barra SKU */}
                                </div>

                            </div>
                            <div className='grid grid-cols-5 gap-2'>
                                {filteredProduct.map(product => (
                                    <div key={product.id} className='p-1 rounded shadow-lg' >
                                        <img src={product.image ?  "storage/images/"+product.image.url : "/img/product_defecto.png" } className='h-48 w-full object-cover' alt="" />
                                        <div className='flex justify-between item-center'>
                                            <p className='text-sm'>{product.name}</p>
                                            <p className='text-sm'>{product.salePrice}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='bg-white shadow-sm'>
                            <p>Productos Seleccionados</p>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
