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

export default function Form({ id = 0, category = {} }) {

    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, put, errors, reset, clearErrors } = useForm({ name: '', description: '', });

    function OpenModal() {
        setShowModal(true);
        if (id !== 0) {
            setData({
                'name': category.name,
                'description': category.description,
            });
        }
    }
    function CloseModal() {
        setShowModal(false);
        clearErrors();
        reset();
    }

    const SubmitCategory = (e) => {
        e.preventDefault();
        //console.log(data);
        if (id === 0) {
            post(route('categories.store'), {
                onSuccess: (res) => {
                    if (res.props.flash.status) {
                        toast.success(res.props.flash.message)
                    } else {
                        toast.error('Error al registrar la categoria, favor de comunicarse con el administrador del sistema')
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
            put(route('categories.update', id), {
                onSuccess: (res) => {
                    if (res.props.flash.status) {
                        toast.success(res.props.flash.message)
                    } else {
                        toast.error('Error al actualizar la categoria, favor de comunicarse con el administrador del sistema')
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
                    <CreateButton type="button" onClick={OpenModal} >Crear nueva Categoria</CreateButton>
                ) : (
                    <button onClick={OpenModal}><HiMiniPencilSquare className="w-6 h-6" /></button>
                )}
            </div>
            <Modal show={showModal} closeable={true} onClose={setShowModal} >
                <div className="p-4">
                    <div className="uppercase flex justify-between item-center font-semibold pb-4">
                        <h1> {id === 0 ? "Crear nueva Categoría" : "Editar Categoria"}</h1>
                        <button type="button" onClick={CloseModal} className="bg-gray-300 hover:bg-gray-500 px-2"><HiXMark /></button>
                    </div>
                    <form action="">
                        <InputLabel htmlFor="name" value="Nombre de la Categoría" />
                        <TextInput className="block w-full mb-3" isFocused={true} type="text" name="name" value={data.name} placeholder="Nombre de la categoría" onChange={(e) => setData('name', e.target.value)} />
                        {errors.name && (
                            <InputError message={errors.name}></InputError>
                        )}
                        <InputLabel htmlFor="description" value="Descripción de la Categoría" />
                        <TextInput className="block w-full mb-3" type="text" name="description" value={data.description} placeholder="Descripción de la categoría" onChange={(e) => setData('description', e.target.value)} />
                        <div className="flex justify-between item-center">
                            <SecondaryButton className="" onClick={CloseModal}>Cancelar</SecondaryButton>
                            <PrimaryButton onClick={SubmitCategory}>Guardar</PrimaryButton>
                        </div>

                    </form>
                </div>
            </Modal>
        </div>
    )
}