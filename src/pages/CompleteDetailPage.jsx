import React, { useContext, useState, useEffect } from 'react'
import Heading from '../components/completeDetail/Heading.jsx'
import Body from '../components/completeDetail/Body.jsx'
import NavBar from '../components/app/NavBar.jsx'

const CompleteDetailPage = () => {

    return (
        <>
            <NavBar />
            <div className="flex flex-col h-screen justify-center items-center">
                <Heading />
                <Body />
            </div>
        </>
    )
}

export default CompleteDetailPage
