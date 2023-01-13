import useFetchData from '../hooks/useFetchData'
import Loader from '../Loader/Loader';
import "./List.css"

const List = ({setInfo}) => {
    const [{data, isLoading, hasError}] = useFetchData(`${process.env.REACT_APP_BASE_URL}/users.json`)
    const handleSelect = (item) => {
        setInfo(item)
    }
    return (
        <div className='list__box'>
            {isLoading && <Loader />}
            {hasError && <p>{hasError}</p>}
            {!isLoading &&
                <ul>
                    {data.map(item => <li key={item.id}><button onClick={() => handleSelect(item)}>{item.name}</button></li>)}
                </ul>
            }
        </div>
    )
}

export default List;