import useFetchData from '../hooks/useFetchData'
import Loader from "../Loader/Loader"
import "./Details.css"

const Details = ({info}) => {
    
    const [{data, isLoading, hasError}] = useFetchData(`${process.env.REACT_APP_BASE_URL}/${info.id}.json`, info)
    
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