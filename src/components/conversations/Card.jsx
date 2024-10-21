import React, { useContext } from 'react'
import { FetchContext } from '../../context/FetchContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Card = () => {
    const { startList, fetchStartDetail, setStartId } = useContext(FetchContext)
    const navigate = useNavigate()
    const url = 'https://mango-l7q7.onrender.com/'

    const handleClick = (id) => {
        setStartId(id)
        fetchStartDetail(id)
        navigate(`/start/${id}`)
    }

    const handleDelete = (id) => {
        axios.delete(`${url}api/start/${id}`)
            .then(response => {
                // Handle successful deletion (e.g., update your component's state)
                console.log('Item deleted successfully:', response.data);
                window.location.reload(true);
            })
            .catch(error => {
                // Handle errors (e.g., display an error message)
                console.error('Error deleting item:', error);
            });
    };

    return (
        <div className="flex flex-col justify-center">
            {
                startList.map((start) => (
                    <div key={start.id} className="border pb-1 rounded-lg w-[600px] hover-pointer flex flex-col items-center">
                        <div className="text-lg py-3 " key={start.id}>
                            {start.title}
                        </div>
                        <div className='flex justify-between items-center w-[130px]'>
                            <button onClick={() => handleClick(start.id)} className="bg-indigo-400 hover:bg-indigo-500 text-white text-xs rounded-lg px-4 py-1">
                                View
                            </button>
                            <button onClick={() => handleDelete(start.id)} className="bg-red-400 hover:bg-red-500 text-white text-xs rounded-lg px-4 py-1">
                                Delete
                            </button>
                        </div>

                    </div>
                ))
            }
        </div>
    )

}

export default Card
