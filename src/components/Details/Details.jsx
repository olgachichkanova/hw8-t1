import { useState, useEffect } from "react";
import useFetchData from '../hooks/useFetchData'
import Loader from "../Loader/Loader"
import "./Details.css"

const Details = ({info}) => {
    // const [{data, isLoading, hasError}] = useFetchData(`${process.env.REACT_APP_BASE_URL}/${info.id}.json`, info)
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(null)

    const url = `${process.env.REACT_APP_BASE_URL}/${info.id}.json`;

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
    }, [url, info.id])
    
    return (
        <div className="details__box">
            {isLoading && <Loader />}
            {hasError && <p>{hasError}</p>}
            {!isLoading &&
                <div>
                    <img src={data.avatar} alt={`${data.name} avatar`} />
                    <p className='details name'>{data.name}</p>
                    <p className='details'>City: {data.details?.city}</p>
                    <p className='details'>Company: {data.details?.company}</p>
                    <p className='details'>Position: {data.details?.position}</p>
                </div>
            }
        </div>
    )
}

export default Details;