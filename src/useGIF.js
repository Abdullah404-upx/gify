import {useState, useEffect}from 'react'
import axios from 'axios'

// api gify 

const API_KEY = 'frSU1LVsZvKmjg0O6F7Q1PYceqJdbw4u'
const url =  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


const useGIF = (tag) =>{

const [gif, setGif] = useState('');

const fetchGif = async (tag)=>{
  
   const {data} = await axios.get(tag? `${url}&tag=${tag}` : url);
    //console.log(data);
   const imgSrc =data.data.images.downsized_large.url;
   
   setGif(imgSrc);
   
}

// dependcy array 
    useEffect(()=>{
        fetchGif(tag)
    }, [tag])


  
    return {gif, fetchGif};
}

export default useGIF