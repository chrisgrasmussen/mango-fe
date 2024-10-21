import React, { useContext, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PostContext } from '../../context/PostContext'
import axios from 'axios'

const Input = () => {
    const { createComplete } = useContext(PostContext)
    const [completeText, setCompleteText] = useState('')
    const { ids } = useParams()

    const handleChange = (e) => {
        setCompleteText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            "body": completeText,
            "start": ids,
        };
        console.log(data);
        await createComplete(data)
        setCompleteText('')
        window.location.reload(true); // refresh page after creating a new post
    }

    return (
        <div className="flex justify-between py-5 items-center">
            <form onSubmit={handleSubmit}>
                <textarea rows={2} className="w-[600px] flex justify-center items-center border px-4 py-1" onChange={handleChange} type="text" placeholder="Complete this thought..." />
                <div className='flex flex-col pt-5'>
                    <button className="bg-indigo-400 hover:bg-indigo-500 text-white text-sm justify-center items-center rounded-xl px-4 py-1" type="submit" >Submit</button>

                </div>
            </form>

        </div>
    )
}

export default Input
