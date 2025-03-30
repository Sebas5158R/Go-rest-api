import { userData } from "@/hooks/types/types"
import { useEffect, useState } from "react"

export function UsersPage() {

    // State para almacenar los usuarios
    const [users, setUsers] = useState([])

    // Función para obtener los usuarios desde la API
    // Se ejecuta una vez al cargar el componente
    useEffect(() => {
        const obtenerUsuarios = async () => {
            const res = await fetch("http://localhost:8181/api/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            const data = await res.json()
            setUsers(data)
        }
        obtenerUsuarios()
    }, [])

    // Si no hay usuarios, se muestra un mensaje de carga
    // Si hay usuarios, se muestra la tabla con los datos
    if (users.length === 0) {
        return <>
        <h1>Cargando...</h1>
        </>
    }

    return (
        <div>
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