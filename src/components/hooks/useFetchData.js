import { useState, useEffect } from "react";

export default function useFetchData(url, deps) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                setData(data)
                setError(null)
            } catch (error) {
                setError(error)
            } finally {setLoading(false)}
        }
        fetchData()
    }, [deps])
    return [{data, isLoading, hasError}]
}