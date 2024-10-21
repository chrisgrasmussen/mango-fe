import React, { useContext } from 'react'
import LoginForm from '../components/login/LoginForm'
import Heading from '../components/login/Heading.jsx'
import NavBar from '../components/app/NavBar.jsx'

const LoginPage = () => {
    return (
        <>
            <NavBar />
            <div className="flex flex-col h-screen justify-center items-center">
                <Heading />
                <LoginForm />

            </div>
        </>
    )
}

export default LoginPage
