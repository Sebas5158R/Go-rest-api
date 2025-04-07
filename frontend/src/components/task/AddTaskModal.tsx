import { useState } from "react"

export function AddTaskModal() {

    const [open, setOpen] = useState(false) // Estado para controlar la apertura del modal


    // Función para abrir el modal de agregar usuario
    const openModal = () => {
        setOpen(true)
    }
    // Función para cerrar el modal de agregar usuario
    // const closeModal = () => {
    //     setOpen(false)
    // }

    return (
        <div className="flex flex-col items-end justify-center w-full h-full p-4">
            <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => openModal()}>
                Agregar tarea
            </button>

            {
                open && (
                    <div>

                    </div>
                )
            }
            
        </div>
    )
}