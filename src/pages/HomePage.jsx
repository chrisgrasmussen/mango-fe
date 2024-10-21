import React, { useContext } from 'react'
import { FetchContext } from '../context/FetchContext'
import HomeCard from '../components/home/HomeCard.jsx'
import HomeText from '../components/home/HomeText.jsx'
import HomeLink from '../components/home/HomeLink.jsx'
import NavBar from '../components/app/NavBar.jsx'


const HomePage = () => {
    const { startList } = useContext(FetchContext)

    return (
        <div className="w-screen flex flex-col ">
            <NavBar />
            <HomeText />
            <HomeCard />
            <HomeLink />
        </div>
    )
}

export default HomePage
