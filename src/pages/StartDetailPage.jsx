import React, { useContext, useState, useEffect } from 'react'
import { FetchContext } from '../context/FetchContext'
import { useParams, Link } from 'react-router-dom'
import Heading from '../components/startDetail/Heading.jsx'
import Body from '../components/startDetail/Body.jsx'
import NavBar from '../components/app/NavBar.jsx'



const StartDetailPage = () => {
    const { startDetail, completeList, fetchStartDetail, fetchCompleteList } = useContext(FetchContext)
    const { ids } = useParams()

    useEffect(() => {
        fetchStartDetail(ids)
        fetchCompleteList(ids)
    }, [ids])

    return (
        <>
            <NavBar />
            <div className="flex flex-col h-screen justify-center items-center">
                <Heading />
                <Body />
            </div >
        </>
    )
}

export default StartDetailPage
