import React, {useState} from 'react'

import useGIF from '../useGIF'
const Tag =()=>{
    const [tag, setTag] = useState('dogs');
    const {gif, fetchGif} = useGIF(tag);
 
   
       
         
        return (
           <div className="container">
               <h1>Select your GIF</h1>
               <img width="300" src={gif} alt="random"></img>
               <input value={tag} onChange={(e)=>setTag(e.target.value)}/>
               <button onClick={()=>fetchGif(tag)}>Search</button>
             
           </div>
        )
}

export default Tag;