import React, {useState, useEffect}from 'react'
import axios from 'axios'

// api gify 

const API_KEY = 'frSU1LVsZvKmjg0O6F7Q1PYceqJdbw4u'

const Random = ()=>{
    
const [gif, setGif] = useState('');

const fetchGif = async ()=>{
    const url =  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
   const {data} = await axios.get(url)
    //console.log(data);
   const imgSrc =data.data.images.downsized_large.url;
   
   setGif(imgSrc);
   
}

// dependcy array 
    useEffect(()=>{
        fetchGif()
    }, [])


  const handleClick = ()=>{
    fetchGif();
    }
    return (
       <div className="container">
           <h1>Random Gif</h1>
           <img width="300" src={gif} alt="random"></img>
           <button onClick={handleClick}>Random GIF</button>
       </div>
    )
}

export default Random