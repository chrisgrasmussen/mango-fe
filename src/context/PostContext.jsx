import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {

    const url = 'https://mango-l7q7.onrender.com/'

    const createStart = async (data) => {

        const postData = {
            "title": data.title
        }

        try {
            const response = await axios.post(`${url}api/start/`, postData);
            console.log("Start created:", response.data);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    const createComplete = async (data) => {

        const postData = {
            "body": data.body,
            "start": data.start
        }

        try {
            const response = await axios.post(`${url}api/start/${data.start}/complete/`, postData);
            console.log("Complete created:", response.data);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    }

    const editStart = async (data) => {
        const putData = {
            "title": data.title
        }

        try {
            console.log(putData.title)
            const response = await axios.put(`${url}api/start/${data.id}`, putData);
            console.log("Start updated:", response.data);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    }

    const editComplete = async (data) => {
        const putData = {
            "body": data.body,
            "start": data.start,
            "id": data.id
        }

        try {
            const response = await axios.put(`${url}api/start/${data.start}/complete/${data.id}/`, putData);
            console.log("Complete updated:", response.data);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    }


    return (
        <PostContext.Provider value={{
            createStart: createStart,
            createComplete: createComplete,
            editStart: editStart,
            editComplete: editComplete,
        }}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider
