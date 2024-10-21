import React, { useContext } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const PrivateRoute = ({ children, ...rest }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    return (
        user ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoute
