import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'


const RegisterForm = () => {
    const { registerUser } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        "username": "",
        "email": "",
        "password": ""
    })

    const usernameChange = (e) => {
        setFormData({ ...formData, "username": e.target.value })
        console.log(formData.username)
    }
    const emailChange = (e) => {
        setFormData({ ...formData, "email": e.target.value })
        console.log(formData.email)
    }
    const passwordChange = (e) => {
        setFormData({ ...formData, "password": e.target.value })
        console.log(formData.password)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        registerUser(formData)
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col w-[300px] gap-5">
                <input onChange={usernameChange} className="px-4 py-2 rounded-xl border" type="text" name="username" placeholder="Enter your username..." />
                <input onChange={passwordChange} className="px-4 py-2 rounded-xl border" type="password" name="password" placeholder="Enter your password..." />
                <input onChange={emailChange} className="px-4 py-2 rounded-xl border" type="email" name="email" placeholder='Enter your email address..' />
                <button type="submit" className="px-4 py-2 rounded-xl bg-indigo-400 text-white">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm
