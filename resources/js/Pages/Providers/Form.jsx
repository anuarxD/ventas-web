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

export default function Form({ id = 0, provider = {} }) {

    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, put, errors, reset, clearErrors } = useForm({
        contact: !provider ? '' : provider.contact,
        company: !provider ? '' : provider.company,
        cellPhone: !provider ? '' : provider.cellPhone,
        address: !provider ? '' : provider.address,
        email: !provider ? '' : provider.email,
    });

    function OpenModal() {
        setShowModal(true);
    }
    function CloseModal(e) {
        e.preventDefault();
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
                    setShowModal(false);
                },
                onError: (error) => console.log("Error: ", error)
            })
            reset();
        } else {
            put(route('providers.update', id), {
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
                    <CreateButton type="button" onClick={OpenModal} >Agregar nuevo Proveedor</CreateButton>
                ) : (
                    <button onClick={OpenModal}><HiMiniPencilSquare className="w-6 h-6" /></button>
                )}
            </div>
            <Modal show={showModal} closeable={true} onClose={setShowModal} >
                <div className="p-4">
                    <div className="uppercase flex justify-between item-center font-semibold pb-4">
                        {id === 0 ? (
                            <h1>Agregar Proveedor</h1>
                        ) : (
                            <h1>Editar Proveedor</h1>
                        )}
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
                        
                        <InputLabel htmlFor="cellPhone" value="Número de Telefono" />
                        <TextInput className="block w-full mb-3" type="text" name="cellPhone" value={data.cellPhone} placeholder="Número de teléfono" onChange={(e) => setData('cellPhone', e.target.value)} />
                        
                        <InputLabel htmlFor="caddress" value="Dirección de la Compañia" />
                        <TextInput className="block w-full mb-3" type="text" name="address" value={data.address} placeholder="Dirección de la Compañia" onChange={(e) => setData('address', e.target.value)} />
                        
                        <InputLabel htmlFor="email" value="Correo electrónico " />
                        <TextInput className="block w-full mb-3" type="text" name="email" value={data.email} placeholder="Correo electrónico" onChange={(e) => setData('email', e.target.value)} />
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