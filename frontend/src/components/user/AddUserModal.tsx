import { useHandleSubmit } from "@/lib/hooks/useHandleSubmit"
import { useState } from "react"

export function AddUserModal() {

    const [open, setOpen] = useState(false) // Estado para controlar la apertura del modal

    // Función para abrir el modal de agregar usuario
    const openModal = () => {
        setOpen(true)
    }
    // Función para cerrar el modal de agregar usuario
    const closeModal = () => {
        setOpen(false)
    }

    // Hook para manejar el envío del formulario
    // Se pasa el endpoint y la función para cerrar el modal
    const { handleSubmit } = useHandleSubmit({
        endpoint: "http://localhost:8181/api/users",
        closeModal,
    });

    return (
        <div className="flex flex-col items-end justify-center w-full h-full p-4">
            <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => openModal()}>
                Agregar usuario
            </button>
            {
                open && (
                    // Main modal
                    <div id="crud-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm bg-gray-900/50">
                        <div className="relative p-4 w-full max-w-md max-h-ful">
                            {/* Contenido del modal */}
                            <div className="relative bg-white rounded-lg shadow-sm border border-gray-200">
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Crear nuevo usuario
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                        data-modal-toggle="crud-modal"
                                        onClick={() => closeModal()}>
                                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Cerrar modal</span>
                                    </button>
                                </div>
                                {/* Modal body */}
                                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900">Nombres</label>
                                            <input type="text" name="first_name" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Nombres" required />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900">Apellidos</label>
                                            <input type="text" name="last_name" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Apellidos" required />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                            <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                        Agregar usuario
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}