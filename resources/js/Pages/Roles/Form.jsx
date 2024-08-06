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
import Checkbox from "@/Components/Checkbox";

export default function Form({ id = 0, role = {}, permissions = {} }) {


    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, put, errors, reset, clearErrors } = useForm({
        name: '',
        permissions: [],
    });

    function OpenModal() {
        setShowModal(true);
        if (id !== 0) {
            setData({
                'name': role.name,
                'permissions': role.permissions.map(permission => permission.name),
            });
        }
    }
    function CloseModal() {
        setShowModal(false);
        clearErrors();
        reset();
    }
    
    const LoadPermissionChange = (value) => {
        setData('permissions', data.permissions.includes(value)
            ? data.permissions.filter(item => item !== value)
            : [...data.permissions, value]);
    }

    const submitRole = (e) => {
        e.preventDefault();
        console.log(data);
        if (id === 0) {
            post(route('roles.store'), {
                onSuccess: (res) => {
                    setShowModal(false);
                    reset();
                },
                onError: (error) => console.log("Error: ", error)
            })
            
        } else {
            put(route('roles.update', id), {
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
                    <CreateButton type="button" onClick={OpenModal} >Crear Nuevo Rol</CreateButton>
                    //<button onClick={OpenModal} className="bg-blue-500">Crear nueva Categoria</button>
                ) : (
                    <button onClick={OpenModal}><HiMiniPencilSquare className="w-6 h-6" /></button>
                )}
            </div>
            <Modal show={showModal} closeable={true} onClose={setShowModal} >
                <div className="p-4">
                    <div className="uppercase flex justify-between item-center font-semibold pb-4">

                        <h1> {id === 0 ? "Crear nuevo Rol" : "Editar Rol"}</h1>

                        <button type="button" onClick={CloseModal} className="bg-gray-300 hover:bg-gray-500 px-2"><HiXMark /></button>
                    </div>


                    <form action="">
                        <div>
                            <InputLabel htmlFor="name" value="Nombre del Rol" />
                            <TextInput className="block w-full mb-3" isFocused={true} type="text" name="name" value={data.name} placeholder="Nombre de la categoría" onChange={(e) => setData('name', e.target.value)} />
                            {errors.name && (
                                <InputError message={errors.name}></InputError>
                            )}
                        </div>
                        <table>
                            <thead>
                                <tr className="grid grid-cols-4 gap-1">
                                    <th >Listar</th>
                                    <th >Crear</th>
                                    <th >Editar</th>
                                    <th >Eliminar</th>
                                </tr>
                            </thead>
                            <div className="grid grid-cols-4 gap-1">
                        {permissions.map(permission => (
                            <div key={permission.id} >
                                <label >
                                    <Checkbox value={permission.name} checked={data.permissions.includes(permission.name)}onChange={(e) => LoadPermissionChange(e.target.value)} /> 
                                    {permission.name}
                                </label>
                            </div>
                        ))}
                        </div>
                        </table>
                        
                        
                        <div className="flex justify-between item-center">
                            <SecondaryButton className="" onClick={CloseModal}>Cancelar</SecondaryButton>
                            <PrimaryButton onClick={submitRole}>Guardar</PrimaryButton>
                        </div>

                    </form>
                </div>
            </Modal>
        </div>
    )
}