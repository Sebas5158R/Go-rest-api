import { GetData } from "../lib/hooks/GetData" // Hook para obtener datos de la API
import { userData } from "@libs/types/types" // Tipos de datos para los usuarios
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
            <Link to={"/"}>Volver</Link>
            <h1>Tabla usuarios</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: userData) => (
                        <tr key={user.ID}>
                            <td>{user.ID}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}