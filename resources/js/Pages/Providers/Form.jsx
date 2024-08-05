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
import { toast } from 'react-toastify';

export default function Form({ id = 0, provider = {} }) {

    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, put, errors, reset, clearErrors } = useForm({contact: '', company: '', cellPhone: '', address: '', email: '',
    });

    function OpenModal() {
        setShowModal(true);
        if (id !== 0) {
            setData({
                contact: !provider ? '' : provider.contact,
                company: !provider ? '' : provider.company,
                cellPhone: !provider ? '' : provider.cellPhone,
                address: !provider ? '' : provider.address,
                email: !provider ? '' : provider.email,
            });
        }
    }
    function CloseModal() {
        setShowModal(false);
        clearErrors();
        reset();
    }

    const submitProvider = (e) => {
        e.preventDefault();
        console.log(data);
        if (id === 0) {
            post(route('providers.store'), {
                onSuccess: (res) => {
                    if (res.props.flash.status) {
                        toast.success(res.props.flash.message)
                    } else {
                        toast.error('Error al registrar el proveedor, favor de comunicarse con el administrador del sistema')
                        console.log(res.props.flash.message)
                        //toast.error(res.props.flash.message)
                    }
                    setShowModal(false);
                },
                onError: (error) => {
                    toast.error('Existen errores en el formulario.')
                }
            })
            reset();
        } else {
            put(route('providers.update', id), {
                onSuccess: (res) => {
                    if (res.props.flash.status) {
                        toast.success(res.props.flash.message)
                    } else {
                        toast.error('Error al actualizar el proveedor, favor de comunicarse con el administrador del sistema')
                        console.log(res.props.flash.message)
                        //toast.error(res.props.flash.message)
                    }
                    setShowModal(false);
                },
                onError: (error) => {
                    toast.error('Existen errores en el formulario.')
                }
            })
            reset();
        }


    }
    return (
        <div>
            <div>
                {id === 0 ? (
                    <CreateButton type="button" onClick={OpenModal} >Agregar nuevo Proveedor</CreateButton>
                ) : (
                    <button onClick={OpenModal}><HiMiniPencilSquare className="w-6 h-6" /></button>
                )}
            </div>
            <Modal show={showModal} closeable={true} onClose={setShowModal} >
                <div className="p-4">
                    <div className="uppercase flex justify-between item-center font-semibold pb-4">

                        <h1>{id === 0 ? "Agregar Proveedor" : "Editar Proveedor"}</h1>

                        <button type="button" onClick={CloseModal} className="bg-gray-300 hover:bg-gray-500 px-2"><HiXMark /></button>
                    </div>


                    <form action="">
                        <InputLabel htmlFor="contact" value="Nombre del Contacto" />
                        <TextInput className="block w-full mb-3" isFocused={true} type="text" name="contact" value={data.contact} placeholder="Nombre del Contacto" onChange={(e) => setData('contact', e.target.value)} />
                        {errors.contact && (
                            <InputError message={errors.contact}></InputError>
                        )}
                        <InputLabel htmlFor="company" value="Nombre de la Compañia" />
                        <TextInput className="block w-full mb-3" type="text" name="company" value={data.company} placeholder="Nombre de la Compañia" onChange={(e) => setData('company', e.target.value)} />
                        {errors.company && (
                            <InputError message={errors.company}></InputError>
                        )}
                        <InputLabel htmlFor="cellPhone" value="Número de Telefono" />
                        <TextInput className="block w-full mb-3" type="text" name="cellPhone" value={data.cellPhone} placeholder="Número de teléfono" onChange={(e) => setData('cellPhone', e.target.value)} />
                        {errors.cellPhone && (
                            <InputError message={errors.cellPhone}></InputError>
                        )}
                        <InputLabel htmlFor="address" value="Dirección de la Compañia" />
                        <TextInput className="block w-full mb-3" type="text" name="address" value={data.address} placeholder="Dirección de la Compañia" onChange={(e) => setData('address', e.target.value)} />
                        {errors.address && (
                            <InputError message={errors.address}></InputError>
                        )}
                        <InputLabel htmlFor="email" value="Correo electrónico " />
                        <TextInput className="block w-full mb-3" type="text" name="email" value={data.email} placeholder="Correo electrónico" onChange={(e) => setData('email', e.target.value)} />
                            {errors.email && (
                                <InputError message={errors.email}></InputError>
                            )}
                        <div className="flex justify-between item-center">
                            <SecondaryButton className="" onClick={CloseModal}>Cancelar</SecondaryButton>
                            <PrimaryButton onClick={submitProvider}>Guardar</PrimaryButton>
                        </div>

                    </form>
                </div>
            </Modal>
        </div>
    )
}