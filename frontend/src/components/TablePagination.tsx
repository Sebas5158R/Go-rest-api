import { useEffect, useState } from "react";

interface PaginationProps<T> {
    data: T[]; // Datos a paginar
    itemsPerPage: number; // Número de elementos por página
    onPageChange: (currentData: T[]) => void; // Callback para enviar los datos paginados
}

export function Pagination<T>({ data, itemsPerPage, onPageChange }: PaginationProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);

    // Calcular el número total de páginas
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Calcular los datos para la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    // Emitir los datos de la primera página al montar el componente
    useEffect(() => {
        onPageChange(currentData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]); // Solo se ejecuta cuando cambian los datos originales

    // Emitir los datos paginados al cambiar la página
    useEffect(() => {
        onPageChange(currentData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    // Función para manejar el cambio de página
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <nav aria-label="Page navigation" className="mt-4">
            <ul className="flex items-center justify-center -space-x-px h-8 text-sm">
                <li>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                    >
                        Anterior
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handlePageChange(index + 1)}
                            className={`flex items-center justify-center px-3 h-8 leading-tight ${
                                currentPage === index + 1
                                    ? "text-white bg-blue-500"
                                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                            } border border-gray-300`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-s-0 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                    >
                        Siguiente
                    </button>
                </li>
            </ul>
        </nav>
    );
}