import React, { useContext } from 'react'
import { FetchContext } from '../context/FetchContext'
import { Link } from 'react-router-dom'

import Heading from '../components/conversations/Heading.jsx'
import Body from '../components/conversations/Body.jsx'
import StartInput from '../components/conversations/StartInput.jsx'
import NavBar from '../components/app/NavBar.jsx'

const ConversationsPage = () => {
    const { startList, fetchStartDetail, setStartId } = useContext(FetchContext)

    return (
        <>
            <NavBar />
            <div className="flex flex-col h-screen justify-center items-center">
                <Heading />
                <StartInput />
                <Body />
            </div>
        </>
    )
}

export default ConversationsPage
