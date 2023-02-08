import React,{useState, useEffect} from 'react'

const Home = () => {
    const [Photo, setPhoto] = useState(null)
    useEffect(() => {
        fetchPhoto()
        async function fetchPhoto () {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=jbaQhmnXsZHf3ACLHQBOXAu5S9wte0hfHaGsGN3T`)
            const data = await res.json();
            setPhoto(data)
        };
        
    }, [])
    console.log(Photo);
    
    return (
        <div>
                <img src={Photo?.hdurl} alt={Photo?.title} className='h-60' />
                <h1 className='font-bold'>{Photo?.title}</h1>
                <p>{Photo?.date}</p>
                <p>{Photo?.explanation}</p>
                <p>{Photo?.copyright}</p>
        </div>
    )
}

export default Home
