import React, { useState, useEffect } from 'react'

const Home = () => {
    const [Photo, setPhoto] = useState(null)
    useEffect(() => {
        fetchPhoto()
        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=jbaQhmnXsZHf3ACLHQBOXAu5S9wte0hfHaGsGN3T`)
            const data = await res.json();
            setPhoto(data)
        };

    }, [])
    console.log(Photo);

    return (
        <div className='bg-slate-800 flex justify-center items-center flex-col h-screen'>
            <img src={Photo?.hdurl} alt={Photo?.title} className='h-72 shadow-2xl' />
            <h1 className='font-bold text-slate-200 my-5 text-3xl'>{Photo?.title}</h1>
            <p className='mb-5 text-cyan-500 font-bold'>{Photo?.date}</p>
            <p className='w-full px-2 lg:w-1/2 mx-auto text-slate-300 text-center'>{Photo?.explanation}</p>
            <div className='text-cyan-500 bg-slate-900 w-full text-center py-3 mt-10'>© | {Photo?.copyright}</div>
        </div>
    )
}

export default Home
