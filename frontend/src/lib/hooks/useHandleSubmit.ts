import { FormEvent } from "react";
import Swal from "sweetalert2";

interface UseHandleSubmitProps {
    endpoint: string; // URL del endpoint
    closeModal: () => void; // Función para cerrar el modal
    onSuccess?: () => void; // Callback opcional para acciones adicionales en éxito
}

export const useHandleSubmit = ({ endpoint, closeModal, onSuccess }: UseHandleSubmitProps) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        if (data) {
            fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("Success:", data);
                    closeModal();
                    Swal.fire({
                        icon: "success",
                        title: "Operación realizada correctamente",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    if (onSuccess) {
                        onSuccess(); // Ejecuta el callback adicional si se proporciona
                    }
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                })
                .catch((error) => {
                    console.error("Error:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Error al realizar la operación",
                        text: error.message,
                    });
                });
        }
    };

    return { handleSubmit };
};