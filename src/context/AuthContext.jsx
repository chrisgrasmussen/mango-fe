import React, { useState, useEffect, createContext } from 'react'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    const [loading, setLoading] = useState(true)


    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('https://mango-l7q7.onrender.com/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': e.target.username.value,
                'password': e.target.password.value,
            }),
        })
        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/start')

        } else {
            alert('Invalid username or password')
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    const updateToken = async () => {
        console.log('update token called')
        const response = await fetch('https://mango-l7q7.onrender.com/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            content: JSON.stringify({
                'refresh': authTokens.refresh
            }),
        })
        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))

        } else {
            logoutUser()
        }
    }


    const registerUser = async (formData) => {
        console.log(formData)
        let response = await fetch('https://mango-l7q7.onrender.com/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': formData.username,
                'password': formData.password,
                'email': formData.email,
            }),
        })
        let data = await response.json()
        console.log(data)
        if (response.status === 200) {
            alert('User registered successfully. Please login.')
            navigate('/login')
        } else {
            alert('Failed to register. Please try again.')
        }
    }


    return (
        <AuthContext.Provider value={{
            loginUser: loginUser,
            logoutUser: logoutUser,
            registerUser: registerUser,
            user: user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
