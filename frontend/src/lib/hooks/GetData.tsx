import { useEffect, useState } from "react";

export function GetData(url: string) {
    // Cargando la información
    const [loading, setLoading] = useState(false);
    // Guardar la información
    const [data, setData] = useState([]);
    // Guardar el error si ocurre
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async() => {
            try {
                setLoading(true);
                const res = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                });
                if(res.ok) {
                    const info = await res.json();
                    setData(info);
                } else throw new Error("No se puede acceder a la URL: " + url);
            } catch (e) {
                setError((e as Error).message);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { loading, data, error };
}