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

export default function Form({ id = 0, client = {} }) {

    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, put, errors, reset, clearErrors } = useForm({
        rfc: !client ? '' : client.rfc,
        fullName: !client ? '' : client.fullName,
        firstName: !client ? '' : client.firstName,
        lastName: !client ? '' : client.lastName,
        cellPhone: !client ? '' : client.cellPhone,
        address: !client ? '' : client.address,
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

    const submitClient = (e) => {
        e.preventDefault();
        console.log(data);
        if (id === 0) {
            post(route('clients.store'), {
                onSuccess: (res) => {
                    setShowModal(false);
                },
                onError: (error) => console.log("Error: ", error),
            })
            reset();
        } else {
            put(route('clients.update', id), {
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
                    <CreateButton type="button" onClick={OpenModal} >Agregar nuevo Cliente</CreateButton>
                ) : (
                    <button onClick={OpenModal}><HiMiniPencilSquare className="w-6 h-6" /></button>
                )}
            </div>
            <Modal show={showModal} closeable={true} onClose={setShowModal} >
                <div className="p-4">
                    <div className="uppercase flex justify-between item-center font-semibold pb-4">
                        {id === 0 ? (
                            <h1>Agregar Cliente</h1>
                        ) : (
                            <h1>Editar Cliente</h1>
                        )}
                        <button type="button" onClick={CloseModal} className="bg-gray-300 hover:bg-gray-500 px-2"><HiXMark /></button>
                    </div>


                    <form action="">
                        <InputLabel htmlFor="rfc" value="RFC" />
                        <TextInput className="block w-full mb-3" isFocused={true} type="text" name="rfc" value={data.rfc} placeholder="RFC del cliente" onChange={(e) => setData('rfc', e.target.value)} />
                        {errors.rfc && (
                            <InputError message={errors.rfc}></InputError>
                        )}
                        
                        <InputLabel htmlFor="firstName" value="Nombre(s)" />
                        <TextInput className="block w-full mb-3" type="text" name="firstName" value={data.firstName} placeholder="Nombre(s) del cliente" onChange={(e) => setData('firstName', e.target.value)} />
                        {errors.firstName && (
                            <InputError message={errors.firstName}></InputError>
                        )}
                        <InputLabel htmlFor="lastName" value="Apellido(s)" />
                        <TextInput className="block w-full mb-3" type="text" name="lastName" value={data.lastName} placeholder="Apellido(s) del cliente" onChange={(e) => setData('lastName', e.target.value)} />
                        {errors.lastName && (
                            <InputError message={errors.lastName}></InputError>
                        )}
                        <InputLabel htmlFor="cellPhone" value="Teléfono del cliente" />
                        <TextInput className="block w-full mb-3" type="text" name="cellPhone" value={data.cellPhone} placeholder="Número telefonico del Cliente" onChange={(e) => setData('cellPhone', e.target.value)} />
                        {errors.cellPhone && (
                            <InputError message={errors.cellPhone}></InputError>
                        )}
                        <InputLabel htmlFor="address" value="Direccion del cliente" />
                        <TextInput className="block w-full mb-3" type="text" name="address" value={data.address} placeholder="Dirección del Cliente" onChange={(e) => setData('address', e.target.value)} />
                        <div className="flex justify-between item-center">    
                            <SecondaryButton className="" onClick={CloseModal}>Cancelar</SecondaryButton>
                            <PrimaryButton onClick={submitClient}>Guardar</PrimaryButton>
                        </div>

                    </form>
                </div>
            </Modal>
        </div>
    )
}