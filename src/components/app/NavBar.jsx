import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-start">
                <Link to={'/'}>
                    <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1 text-white">Home</button>
                </Link>
                <Link to={'/start'}>
                    <button className="bg-yellow-200 hover:bg-yellow-300 px-4 py-1">Conversations</button>
                </Link>

            </div>
            {
                !user ?
                    <Link to={'/login'}><button className="bg-indigo-400 hover:bg-indigo-500 px-4 py-1 text-white">Login</button></Link>
                    :
                    <button onClick={logoutUser} className="bg-red-500 hover:bg-red-600 px-4 py-1 text-white">Logout</button>
            }
        </div>
    )
}

export default NavBar
