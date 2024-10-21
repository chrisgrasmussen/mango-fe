import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const HomeText = () => {
    const { auth, name } = useContext(AuthContext)
    return (
        <>

            <div className="pt-5 flex flex-col justify-center items-center">
                <h1 className=" text-[100px] pt-20">Eidetic</h1>
                <h1 className="pb-20 bg-gradient-to-r from-blue-600 via-green-500 to bg-indigo-400 inline-block text-transparent bg-clip-text text-3xl ">Start a thought &#8594; Complete a thought</h1>
            </div>

        </>)
}

export default HomeText
