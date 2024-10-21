import React from 'react'
import Heading from '../components/register/Heading'
import RegisterForm from '../components/register/RegisterForm'
import NavBar from '../components/app/NavBar'

const RegisterPage = () => {
    return (
        <>
            <NavBar />
            <div className="flex flex-col h-screen justify-center items-center">
                <Heading />
                <RegisterForm />
            </div>
        </>
    )
}

export default RegisterPage
