import Modal from "@/Components/Modal";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { P } from "@/Components/P";

export default function Form ({id = 0, category = {}}){

    const [showModal, setShowModal] = useState(false);
    const {data, setData, post, put, errors, reset, clearErrors } = useForm({
        name: !category ? '' : category.name,
        description: !category ? '' : category.description,
    });

    function OpenModal() {
        setShowModal(true);
    }
    function CloseModal(e){
        e.preventDefault();
        setShowModal(false);
        clearErrors();
        reset();
    }

    const submitCategory = (e) => {
        e.preventDefault();
        console.log(data);
        if(id === 0){
            post(route('categories.store'),{
                onSuccess:(res) =>{
                    setShowModal(false);
                },
                onError: (error) => console.log("Error: ", error)
                })
            reset();
        }else{
            put(route('categories.update', id),{
                onSuccess:(res) =>{
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
                { id === 0 ? (
                    <button onClick={OpenModal}>Crear nueva Categoria</button>
                ):(
                    <button onClick={OpenModal}>Editar</button>
                )}
            </div>
        <Modal show={showModal} closeable={true} onClose={setShowModal} >
            <div>
            { id === 0 ? (
                    <h1>Crear nueva Categoría</h1>
                ):(
                    <h1>Editar la Categoría</h1>
                )}
                
                <form action="">
                    <label htmlFor="">Nombre de la Categoría</label><br />
                    <input type="text" name="name" value={data.name} placeholder="Nombre de la categoría" required onChange={(e)=>setData('name', e.target.value)}/><br />
                    { errors.name && (
                        <p>{errors.name}</p>
                    )}
                    <label htmlFor="">Descripcion de la Categoría</label><br />
                    <input type="text" name="description" value={data.description} placeholder="Descripción de la categoría" onChange={(e)=>setData('description', e.target.value)}/><br />
                    <button onClick={submitCategory}>Guardar</button>
                    <button onClick={CloseModal}>Cancelar </button>
                </form>
            </div>
        </Modal>          
        </div>
    )
}