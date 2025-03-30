import { GetData } from "@/lib/hooks/getData" // Hook para obtener datos de la API
import { userData } from "@libs/types/types" // Tipos de datos para los usuarios
import { AddUserModal } from "@components/user/AddUserModal"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "@/assets/svgs/arrowLeft"

export function UsersPage() {

    // State para almacenar los usuarios
    const [users, setUsers] = useState([])

    // Función para obtener los usuarios desde la API
    // Se ejecuta una vez al cargar el componente
    const { loading, data, error } = GetData("http://localhost:8181/api/users")
    useEffect(() => {
        if (data) {
            setUsers(data)
        }
    }, [data])

    // Mientras se cargan los datos, se muestra un mensaje de carga
    // Si hay un error, se muestra un mensaje de error
    if (loading) {
        return <>
            <h1>Cargando...</h1>
        </>
    } else if (error) {
        return <>
            <h1>Error al cargar los usuarios</h1>
        </>
    }

    return (
        <div>
            <Link to={"/"} className="flex items-center">
                {ArrowLeft(30, 30)} Volver
            </Link>
            <div className="flex flex-col w-full h-full p-4">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Tabla de usuarios</h1>
                <p className="mb-3 text-lg text-gray-500 md:text-xl">Usuarios totales: {users.length}</p>
                <AddUserModal />
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Nombre</th>
                                <th scope="col" className="px-6 py-3">Apellido</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user: userData) => (
                                <tr key={user.ID} className="odd:bg-white even:bg-gray-50 border-b border-gray-200 hover:bg-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{user.ID}</th>
                                    <td className="px-6 py-4">{user.first_name}</td>
                                    <td className="px-6 py-4">{user.last_name}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4">
                                        <Link to={`/api/user/${user.ID}`} className="font-medium text-blue-600 hover:underline">Ver tareas </Link>
                                        - 
                                        <Link to={`/api/user/${user.ID}`} className="font-medium text-blue-600 hover:underline"> Editar</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}