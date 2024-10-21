import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import HomeLink from './HomeLink.jsx'

const HomeCard = () => {
    const [starts, setStarts] = useState({})
    const [randomStart, setRandomStart] = useState({ "title": 'Click the random button to try it out!' });
    const [randomStartOutput, setRandomStartOutput] = useState('');
    const [completeText, setCompleteText] = useState('');

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const data = await fetch('https://mango-l7q7.onrender.com/api/start/');
            const json = await data.json();
            setStarts(json);
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);


    }, []);

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * starts.length);
        setRandomStart(starts[randomIndex]);
        setRandomStartOutput(starts[randomIndex].title)
        console.log(randomStart.id, randomStartOutput);

    };

    const handleChange = (event) => {
        setCompleteText(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            "body": completeText,
            "start": randomStart.id,
        };
        console.log(data);

        axios.post(`https://mango-l7q7.onrender.com/api/start/${randomStart.id}/complete/`, data).then((response) => {
            console.log(response);
        })
        setRandomStart({ "title": 'Your thought has been completed!!' });
    };





    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                    <div className="">
                        <div className="w-[600px] bg-sky-100 rounded-xl shadow-2xl">
                            <div className="flex flex-col justify-center items-center">
                                {/* <h1 className="absolute animate-pulse pt-12 pl-6 text-yellow-500 text-1xl">Try it out!</h1> */}

                                <h3 className="text-xl text-gray-600 font-regular py-4">
                                    {randomStart.title}
                                </h3>

                            </div>
                            <div className="h-0.5 opacity-50 bg-gray-300 mb-2"></div>
                            <div className="px-6 py-4">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="chat" className="sr-only">Your message</label>
                                    <div className="flex items-center py-2 px-3">
                                        <button type="button" onClick={handleClick} className="justify-center p-2 text-gray-500 rounded-full cursor-pointer hover:text-gray-900 bg-indigo-400 hover:bg-indigo-500">
                                            <svg fill="#ffffff" width="18px" height="18px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 23 3 L 23 7 L 18.40625 7 L 18.125 7.5 L 14.5 13.96875 L 10.59375 7 L 4 7 L 4 9 L 9.40625 9 L 13.34375 16 L 9.40625 23 L 4 23 L 4 25 L 10.59375 25 L 19.59375 9 L 23 9 L 23 13 L 28 8 Z M 16.78125 18 L 15.625 20.0625 L 18.40625 25 L 23 25 L 23 29 L 28 24 L 23 19 L 23 23 L 19.59375 23 Z"></path></g></svg>
                                        </button>

                                        <textarea onChange={handleChange} name="completeText" rows="3" className="block mx-4 p-2.5 w-full text-sm text-gray-700 bg-white rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500  " placeholder="Complete your thought.."></textarea>
                                        <button type="submit" text="submit" className="inline-flex justify-center p-2 text-blue-500 rounded-full cursor-pointer hover:bg-blue-100">
                                            <svg className="w-8 h-8 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard
