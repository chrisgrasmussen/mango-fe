import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'


const LoginForm = () => {
    const { loginUser } = useContext(AuthContext)

    return (
        <div>
            <form onSubmit={loginUser} className="flex flex-col w-[300px] gap-3 pb-5">
                <input className="px-4 py-2 rounded-xl border" type="text" name="username" placeholder="Enter your username..." />
                <input className="px-4 py-2 rounded-xl border" type="password" name="password" placeholder="Enter your password..." />
                <button type="submit" className="px-4 py-2 rounded-xl bg-indigo-400 text-white">Login</button>
            </form>
            <Link to='/register'><button className="w-[300px] px-4 py-2 rounded-xl bg-yellow-100">Register</button></Link>
        </div>
    )
}

export default LoginForm
