import { taskData } from "@/lib/types/types" // Importa el tipo de datos de la tarea
import { GetData } from "../lib/hooks/getData" // Hook para obtener datos de la API
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function TasksPage() {

    // State para almacenar las tareas
    const [tasks, setTasks] = useState([])

    // Función para obtener las tareas desde la API
    // Se ejecuta una vez al cargar el componente
    const { loading, data, error } = GetData("http://localhost:8181/api/tasks")
    useEffect(() => {
        if(data) {
            setTasks(data)
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
        <h1>Error al cargar las tareas</h1>
        </>
    }

    return (
        <div>
            <Link to={"/"}>Volver</Link>
            <h1>Tabla tareas</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Fecha de creación</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task: taskData) => (
                        <tr key={task.ID}>
                            <td>{task.ID}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                                {task.done ? "Completada" : "Pendiente"}
                            </td>
                            <td>{task.CreatedAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}