import React, { useContext, useState, useEffect } from 'react'
import { FetchContext } from '../../context/FetchContext'
import { PostContext } from '../../context/PostContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Body = () => {
    const { fetchStartDetail, fetchCompleteDetail, completeDetail } = useContext(FetchContext)
    const { editComplete } = useContext(PostContext)
    const { ids, idc } = useParams()
    const [body, setBody] = useState('')
    const url = 'https://mango-l7q7.onrender.com/'
    const navigate = useNavigate()


    useEffect(() => {
        fetchStartDetail(ids, idc)
        fetchCompleteDetail(ids, idc)

    }, [ids, idc])

    const handleChange = (e) => {
        setBody(e.target.value)
    }

    const handleSave = async () => {
        const putData = {
            "body": body,
            "start": ids,
            "id": idc,
        };
        console.log(putData)
        await editComplete(putData)

    }

    const handleDelete = async (ids, idc) => {
        await axios.delete(`${url}api/start/${ids}/complete/${idc}/`)
            .then(response => {
                // Handle successful deletion (e.g., update your component's state)
                console.log('Item deleted successfully:', response.data);
                navigate(`/start/${ids}`)
            })
            .catch(error => {
                // Handle errors (e.g., display an error message)
                console.error('Error deleting item:', error);
            });
    }


    return (
        <div className="flex w-[500px] justify-around items-center pt-10">
            <input onChange={handleChange} type="text" placeholder={completeDetail.body} className="p-4 flex items-center justify-center border rounded-2xl w-[300px] py-1" />
            <div className='flex flex-row justify-around gap-1'>
                <button onClick={() => handleSave()} className="rounded-full border px-5 bg-yellow-200 hover:bg-yellow-300 py-1 text-sm ">Save</button>
                <button onClick={() => handleDelete(ids, idc)} className="rounded-full border px-5 bg-red-500 hover:bg-red-600 py-1 text-sm text-white">Delete</button>
            </div>

        </div>
    )
}

export default Body
