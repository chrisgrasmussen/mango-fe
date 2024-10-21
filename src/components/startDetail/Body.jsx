import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FetchContext } from '../../context/FetchContext'
import { PostContext } from '../../context/PostContext'
import Input from './Input.jsx'

const Body = () => {
    const { startDetail, completeList, fetchStartDetail, fetchCompleteList } = useContext(FetchContext)
    const { editStart } = useContext(PostContext)
    const { ids } = useParams()

    useEffect(() => {
        fetchStartDetail(ids)
        fetchCompleteList(ids)
    }, [ids])

    const handleChange = (e) => {
        startDetail.title = e.target.value
        console.log(startDetail.title)

    }

    const handleSave = async (data) => {
        const postData = {
            "title": startDetail.title,
            "id": ids
        }
        await editStart(postData)
        window.location.reload(true); // refresh page after updating the start title

    }



    return (
        <div className='flex flex-col items-center'>
            <div className='flex w-[600px] border rounded-xl p-4 justify-between items-center'>
                <input onChange={handleChange} className="w-[500px] text-2xl pl-5 py-1" placeholder={startDetail.title} />
                <button onClick={handleSave} className='bg-yellow-100 h-10 px-4 py-1 text-sm rounded-xl'>Save</button>
            </div>
            <Input />
            {
                completeList.map((complete) => (
                    <Link key={complete.id} to={`/start/${ids}/complete/${complete.id}`}>
                        <div>
                            <div className="flex flex-col border rounded-lg justify-center items-center py-4 w-[600px] pr-5">
                                <p className='pb-2'>{complete.body}</p>
                                <div className="flex w-[150px] justify-around">
                                    <button className="bg-indigo-400 hover:bg-indigo-500 text-white text-xs rounded-2xl px-4 py-1">View</button>
                                    <button className="bg-red-400 hover:bg-red-500 text-white text-xs rounded-2xl px-4 py-1">Delete</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
    )
}

export default Body
