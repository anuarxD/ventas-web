import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { P } from "@/Components/P";
import CreateButton from "@/Components/CreateButton";
import { HiMiniPencilSquare, HiXMark } from "react-icons/hi2";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from "@/Components/SecondaryButton";
import InputError from "@/Components/InputError";

export default function Form({ id = 0, category = {} }) {

    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, put, errors, reset, clearErrors } = useForm({
        name: !category ? '' : category.name,
        description: !category ? '' : category.description,
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

    const submitCategory = (e) => {
        e.preventDefault();
        console.log(data);
        if (id === 0) {
            post(route('categories.store'), {
                onSuccess: (res) => {
                    setShowModal(false);
                },
                onError: (error) => console.log("Error: ", error)
            })
            reset();
        } else {
            put(route('categories.update', id), {
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
                    <CreateButton type="button" onClick={OpenModal} >Crear nueva Categoria</CreateButton>
                    //<button onClick={OpenModal} className="bg-blue-500">Crear nueva Categoria</button>
                ) : (
                    <button onClick={OpenModal}><HiMiniPencilSquare className="w-6 h-6" /></button>
                )}
            </div>
            <Modal show={showModal} closeable={true} onClose={setShowModal} >
                <div className="p-4">
                    <div className="uppercase flex justify-between item-center font-semibold pb-4">
                        {id === 0 ? (
                            <h1>Crear nueva Categoría</h1>
                        ) : (
                            <h1>Editar la Categoría</h1>
                        )}
                        <button type="button" onClick={CloseModal} className="bg-gray-300 hover:bg-gray-500 px-2"><HiXMark /></button>
                    </div>


                    <form action="">
                        <InputLabel htmlFor="name" value="Nombre de la Categoría" />
                        <TextInput className="block w-full mb-3" isFocused={true} type="text" name="name" value={data.name} placeholder="Nombre de la categoría" onChange={(e) => setData('name', e.target.value)} />
                        {/*<label htmlFor="">Nombre de la Categoría</label><br /> */}
                        {/*<input type="text" name="name" value={data.name} placeholder="Nombre de la categoría" required onChange={(e)=>setData('name', e.target.value)}/><br />*/}
                        {errors.name && (
                            <InputError message={errors.name}></InputError>
                            //<p>{errors.name}</p>
                        )}
                        <InputLabel htmlFor="description" value="Descripción de la Categoría" />
                        <TextInput className="block w-full mb-3" type="text" name="description" value={data.description} placeholder="Descripción de la categoría" onChange={(e) => setData('description', e.target.value)} />
                        {/*<label htmlFor="">Descripcion de la Categoría</label><br />*/}
                        {/*<input type="text" name="description" value={data.description} placeholder="Descripción de la categoría" onChange={(e)=>setData('description', e.target.value)}/><br />*/}
                        <div className="flex justify-between item-center">
                            <SecondaryButton className="" onClick={CloseModal}>Cancelar</SecondaryButton>
                            <PrimaryButton onClick={submitCategory}>Guardar</PrimaryButton>
                            {/*<button onClick={submitCategory}>Guardar</button>
                              <button onClick={CloseModal}>Cancelar </button>*/}
                        </div>

                    </form>
                </div>
            </Modal>
        </div>
    )
}