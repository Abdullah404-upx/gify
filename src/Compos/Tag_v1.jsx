import React, {useState, useEffect}from 'react'
import axios from 'axios'

// api gify 

const API_KEY = 'frSU1LVsZvKmjg0O6F7Q1PYceqJdbw4u'

const Random = ()=>{
const [tag, setTag] = useState('dogs');
const [gif, setGif] = useState('');

const fetchGif = async (tag)=>{
    const url =  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
   const {data} = await axios.get(url)
    //console.log(data);
   const imgSrc =data.data.images.downsized_large.url;
   
   setGif(imgSrc);
   
}

// dependcy array 
    useEffect(()=>{
        fetchGif(tag)
    }, [])


  const handleClick = ()=>{
    fetchGif(tag);
    }
    return (
       <div className="container">
           <h1>Select your GIF</h1>
           <img width="300" src={gif} alt="random"></img>
           <input value={tag} onChange={(e)=>setTag(e.target.value)}/>
           <button onClick={handleClick}>Search</button>
         
       </div>
    )
}

export default Random