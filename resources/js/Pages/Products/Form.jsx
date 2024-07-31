import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import CreateButton from "@/Components/CreateButton";
import { HiMiniPencilSquare, HiXMark } from "react-icons/hi2";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from "@/Components/SecondaryButton";
import InputError from "@/Components/InputError";

export default function  Form({ id = 0, product = {}, categories=[] }) {

    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, put, errors, reset, clearErrors } = useForm({
        name: '',
        salePrice: '',
        quantity: '',
        status: '' ,
        category_id: '' ,
        image: '' ,
        _method: 'PUT',

    });

    function OpenModal() {
        setShowModal(true);
        if (id !== 0) {
            setData({
                'name': product.name,
                'salePrice': !product ? '' : product.salePrice,
                'quantity': !product ? '' : product.quantity,
                'status': !product ? '' : product.status,
                'category_id': !product ? '' : product.category_id,
            });
        }
    }
    function CloseModal(e) {
        e.preventDefault();
        setShowModal(false);
        clearErrors();
        reset();
    }

    const submitProduct = (e) => {
        e.preventDefault();
        console.log(data);
        if (id === 0) {
            post(route('products.store'), {
                onSuccess: (res) => {
                    setShowModal(false);
                },
                onError: (error) => console.log("Error: ", error),
            })
            reset();
        } else {
            post(route('products.update', id), {
                onSuccess: (res) => {
                    setShowModal(false);
                },
                onError: (error) => console.log("Error: ", error)
            })
            reset();
        }


    }
    return (
        <div>
            <div>
                {id === 0 ? (
                    <CreateButton type="button" onClick={OpenModal} >Agregar nuevo Producto</CreateButton>
                ) : (
                    <button onClick={OpenModal}><HiMiniPencilSquare className="w-6 h-6" /></button>
                )}
            </div>
            <Modal show={showModal} closeable={true} onClose={setShowModal} >
                <div className="p-4">
                    <div className="uppercase flex justify-between item-center font-semibold pb-4">
                       
                            <h1> {id === 0 ? "Agregar Producto" : "Editar Producto"} </h1>
        
                        <button type="button" onClick={CloseModal} className="bg-gray-300 hover:bg-gray-500 px-2"><HiXMark /></button>
                    </div>


                    <form action="">
                        <InputLabel htmlFor="name" value="Producto" />
                        <TextInput className="block w-full mb-3" isFocused={true} type="text" name="name" value={data.name} placeholder="Nombre del producto" onChange={(e) => setData('name', e.target.value)} />
                        {errors.name && (
                            <InputError message={errors.name}></InputError>
                        )}

                        <InputLabel htmlFor="salePrice" value="Precio del producto" />
                        <TextInput className="block w-full mb-3" type="text" name="salePrice" value={data.salePrice} placeholder="Precio del producto" onChange={(e) => setData('salePrice', e.target.value)} />
                        {errors.salePrice && (
                            <InputError message={errors.salePrice}></InputError>
                        )}
                        <InputLabel htmlFor="quantity" value="Cantidad" />
                        <TextInput className="block w-full mb-3" type="text" name="quantity" value={data.quantity} placeholder="Cantidad" onChange={(e) => setData('quantity', e.target.value)} />
                        {errors.quantity && (
                            <InputError message={errors.quantity}></InputError>
                        )}
                        <InputLabel htmlFor="status" value="Estado del producto" />
                        <TextInput className="block w-full mb-3" type="text" name="status" value={data.status} placeholder="Activo o Descontinuado" onChange={(e) => setData('status', e.target.value)} />
                        {errors.status && (
                            <InputError message={errors.status}></InputError>
                        )}
                        <InputLabel htmlFor="category_id" value="Categoría" />
                        <select className="block w-full mb-3 'border-gray-300 focus:border-indigo-500 rounded-md shadow-sm "  onChange={(e)=>setData('category_id', e.target.value)}>
                            {categories.map(category =>(
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                        {/*<TextInput className="block w-full mb-3" type="text" name="category_id" value={data.category_id} placeholder="Categoría del producto" onChange={(e) => setData('category_id', e.target.value)} />*/}
                        <input type="file" onChange={(e) => setData('image', e.target.files[0])} />

                        <div className="flex justify-between item-center">
                            <SecondaryButton className="" onClick={CloseModal}>Cancelar</SecondaryButton>
                            <PrimaryButton onClick={submitProduct}>Guardar</PrimaryButton>
                        </div>

                    </form>
                </div>
            </Modal>
        </div>
    )
}