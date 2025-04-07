import { taskData } from "@/lib/types/types" // Importa el tipo de datos de la tarea
import { GetData } from "../lib/hooks/getData" // Hook para obtener datos de la API
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "@/assets/svgs/arrowLeft"

export function TasksPage() {

    // State para almacenar las tareas
    const [tasks, setTasks] = useState([]);

    // Función para obtener las tareas desde la API
    // Se ejecuta una vez al cargar el componente
    const { loading, data, error } = GetData("http://localhost:8181/api/tasks")
    useEffect(() => {
        if (data) {
            setTasks(data)
        }
    }, [data]);

    // Formato de la fecha
    const formatDate = (date: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(date).toLocaleDateString('es-ES', options);
    }

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
            <Link to={"/"} className="flex items-center">
                {ArrowLeft(30, 30)} Volver
            </Link>
            <div className="flex flex-col w-full h-full p-4">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Lista de tareas</h1>
                <p className="mb-3 text-lg text-gray-500 md:text-xl">Tareas totales: {tasks.length}</p>
                {/* Modal para nueva tarea aquí */}
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-5">
                            <tr>
                                <th scope="col" className="px-6 py-3">ID</th>
                                <th scope="col" className="px-6 py-3">Titulo</th>
                                <th scope="col" className="px-6 py-3">Descripción</th>
                                <th scope="col" className="px-6 py-3">Fecha de creación</th>
                                <th scope="col" className="px-6 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task: taskData) => (
                                    <tr key={task.ID} className="odd:bg-white even:bg-gray-50 border-b border-gray-200 hover:bg-gray-200">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{task.ID}</th>
                                        <td className="px-6 py-4">{task.title}</td>
                                        <td className="px-6 py-4">{task.description}</td>
                                        <td className="px-6 py-4">{formatDate(task.CreatedAt)}</td>
                                        <td className="px-6 py-4">
                                            <Link to={`/api/task/${task.ID}`} className="text-blue-600 hover:text-blue-900 font-bold">Editar</Link>
                                            <button className="text-red-600 hover:text-red-900 ml-2 font-bold">Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    )
}