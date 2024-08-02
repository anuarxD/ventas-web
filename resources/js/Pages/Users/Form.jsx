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

export default function Form({ id = 0, user = {} }) {

    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, put, errors, reset, clearErrors } = useForm({
        name: '',
        email:'' ,
        password:'',
        password_confirmation: '' ,
        status: 1,
    });

    function OpenModal() {
        setShowModal(true);
        if (id !== 0) {
            setData({
                'name': user.name,
                'email': !user.email ? '' : user.email,
                //'role_name': user.roles[0].name
            })
        }
    }
    function CloseModal(e) {
        e.preventDefault();
        setShowModal(false);
        clearErrors();
        reset();
    }

    const SubmitUser = (e) => {
        e.preventDefault();
        if (id === 0) {
            post(route('users.store'), {
                onSuccess: (res) => {
                    console.log('OK', res);
                    if(res.props.flash.status){
                        toast.success(res.props.flash.message);
                    }
                    else {
                        toast.error(res.props.flash.message);
                    }
                    CloseModal();
                },
                onError: (error) => {
                    toast.error('Existen errores en el formulario.');
                    console.log('error: ', error);
                }
            })
        }
        else {
            put(route('users.update', id), {
                onSuccess: (res) => {
                    console.log('OK', res);
                    if(res.props.flash.status){
                        toast.success(res.props.flash.message);
                    }
                    else {
                        toast.error(res.props.flash.message);
                    }
                    CloseModal();
                },
                onError: (error) => {
                    toast.error('Existen errores en el formulario.');
                    console.log('error: ', error);
                }
            })
        }

    }

    return (
        <div>
            <div>
                {id === 0 ? (
                    <CreateButton type="button" onClick={OpenModal} >Crear nuevo usuario</CreateButton>
                ) : (
                    <button onClick={OpenModal}><HiMiniPencilSquare className="w-6 h-6" /></button>
                )}
            </div>
            <Modal show={showModal} closeable={true} onClose={setShowModal} >
                <div className="p-4">
                    <div className="uppercase flex justify-between item-center font-semibold pb-4">
                        
                            <h1> {id === 0 ? "Crear nuevo Usuario" : "Editar Usuario"}</h1>
                            
                        <button type="button" onClick={CloseModal} className="bg-gray-300 hover:bg-gray-500 px-2"><HiXMark /></button>
                    </div>


                    <form action="">
                        <InputLabel value="Nombre del Usuario" />
                        <TextInput className="block w-full mb-3" isFocused={true} type="text" name="name" value={data.name} placeholder="Nombre de la categoría" onChange={(e) => setData('name', e.target.value)} />
                        {errors.name && (
                            <InputError message={errors.name}></InputError>
                        )}
                        <InputLabel value="Correo Electrónico" />
                        <TextInput className="block w-full mb-3" type="text" name="email" value={data.email} placeholder="Correo Electrónico" onChange={(e) => setData('email', e.target.value)} />
                        {errors.email && (
                            <InputError message={errors.email}></InputError>
                        )}

                        <InputLabel value="Contraseña" />
                        <TextInput className="block w-full mb-3" type="password" name="password" value={data.password} placeholder="Contraseña" onChange={(e) => setData('password', e.target.value)} />
                        {errors.password&& (
                            <InputError message={errors.password}></InputError>
                        )}
                        <InputLabel value="Confirmar Contraseña" />
                        <TextInput className=" block w-full mb-2" type="password" name="password_confirmation" placeholder="Confirmar Contraseña" maxLength={75} value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} />



                        <div className="flex justify-between item-center">
                            <SecondaryButton className="" onClick={CloseModal}>Cancelar</SecondaryButton>
                            <PrimaryButton onClick={SubmitUser}>Guardar</PrimaryButton>
                        </div>

                    </form>
                </div>
            </Modal>
        </div>
    )
}