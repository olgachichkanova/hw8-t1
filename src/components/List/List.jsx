import { useState, useEffect } from "react";
import useFetchData from '../hooks/useFetchData'
import Loader from '../Loader/Loader';
import "./List.css"

const List = ({setInfo}) => {
    // const [{data, isLoading, hasError}] = useFetchData(`${process.env.REACT_APP_BASE_URL}/users.json`)
    const url = `${process.env.REACT_APP_BASE_URL}/users.json`
    const [list, setList] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                setList(data)
                setError(null)
            } catch (error) {
                setError(error)
            } finally {setLoading(false)}
        }
        fetchData()
    }, [url])
    const handleSelect = (item) => {
        setInfo(item)
    }
    return (
        <div className='list__box'>
            {isLoading && <Loader />}
            {hasError && <p>{hasError}</p>}
            {!isLoading &&
                <ul>
                    {list.map(item => <li key={item.id}><button onClick={() => handleSelect(item)}>{item.name}</button></li>)}
                </ul>
            }
        </div>
    )
}

export default List;