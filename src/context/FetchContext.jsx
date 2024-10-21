import React, { createContext, useState, useEffect } from 'react'

export const FetchContext = createContext();

const FetchContextProvider = ({ children }) => {
    const [startList, setStartList] = useState([])
    const [startDetail, setStartDetail] = useState('')
    const [completeList, setCompleteList] = useState([])
    const [completeDetail, setCompleteDetail] = useState([])
    const [startId, setStartId] = useState('')

    const url = 'https://mango-l7q7.onrender.com/'


    useEffect(() => {
        fetchStartList()
    }, [])

    const fetchStartList = () => {
        fetch(`${url}api/start/`)
            .then(response => response.json())
            .then(data => setStartList(data))
            .catch(error => console.error('Error:', error))
    }

    const fetchStartDetail = (id) => {
        // Fetch details for the start with the provided ID
        fetch(`${url}api/start/${id}`)
            .then(response => response.json())
            .then(data => setStartDetail(data))
            .catch(error => console.error('Error:', error))
    }

    const fetchCompleteList = (id) => {
        fetch(`${url}api/start/${id}/complete`)
            .then(response => response.json())
            .then(data => setCompleteList(data))
            .catch(error => console.error('Error:', error))
    }

    const fetchCompleteDetail = (ids, idc) => {
        // Fetch details for the complete with the provided ID
        fetch(`${url}api/start/${ids}/complete/${idc}`)
            .then(response => response.json())
            .then(data => setCompleteDetail(data))
            .catch(error => console.error('Error:', error))
    }

    return (
        <FetchContext.Provider value={{
            startList, startDetail, completeList,
            startId, completeDetail, setStartId,
            fetchStartDetail, fetchCompleteList, fetchCompleteDetail,
        }}>
            {children}
        </FetchContext.Provider>
    )
}

export default FetchContextProvider
