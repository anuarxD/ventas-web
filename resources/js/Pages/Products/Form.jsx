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
import TextSelect from "@/Components/TextSelect";
import { toast } from 'react-toastify';


export default function Form({ id = 0, product = {}, categories = [] }) {

    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, errors, reset, clearErrors } = useForm({ name: '', barCode: '', salePrice: '', quantity: '', status: 'Activo', category_id: '', image: '' });

    const statusProduct = [
        { id: 'Activo', name: 'Activo' },
        { id: 'Descontinuado', name: 'Descontinuado' },
    ]

    function OpenModal() {
        setShowModal(true);
        if (id !== 0) {
            setData({
                'name': product.name,
                'barCode': !product.barCode ? '' : product.barCode,
                'salePrice': !product.salePrice ? '' : product.salePrice,
                'quantity': !product.quantity ? '' : product.quantity,
                'status': !product.status ? '' : product.status,
                'category_id': !product.category_id ? '' :product.category_id,
            });
        }
    }
    function CloseModal() {
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
                    if (res.props.flash.status) {
                        toast.success(res.props.flash.message)
                    } else {
                        toast.error('Error al registrar el Producto, favor de comunicarse con el administrador del sistema')
                        console.log(res.props.flash.message)
                        //toast.error(res.props.flash.message)
                    }
                    setShowModal(false);
                },
                onError: (error) => {
                    toast.error('Existen errores en el formulario.')
                    console.log('error: ', error);
                }
            })
            reset();
        } else {
            post(route('products.update', id), {
                _method: 'PUT',
                onSuccess: (res) => {
                    if (res.props.flash.status) {
                        toast.success(res.props.flash.message)
                    } else {
                        toast.error('Error al actualizar el Producto, favor de comunicarse con el administrador del sistema')
                        console.log(res.props.flash.message)
                        //toast.error(res.props.flash.message)
                    }
                    setShowModal(false);
                },
                onError: (error) => {
                    toast.error('Existen errores en el formulario.');
                    console.log('error: ', error);

                }
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

                        <InputLabel htmlFor="barCode" value="Código de barra" />
                        <TextInput className="block w-full mb-3" type="number" name="barCode" value={data.barCode} placeholder="10 digitos" onChange={(e) => setData('barCode', e.target.value)} />
                        {errors.barCode && (
                            <InputError message={errors.barCode}></InputError>
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

                        <div>
                            <InputLabel value="Estado" />
                            <TextSelect options={statusProduct} value={data.status} onChange={(e) => setData('status', e.target.value)} />
                        </div>
                        <div>
                            <InputLabel value="Categoria" />
                            <TextSelect options={categories} value={data.category_id} onChange={(e) => setData('category_id', e.target.value)} />
                        </div>
                        {errors.category_id && (
                                <InputError message={errors.category_id}></InputError>
                            )}

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