import React from 'react'

import useGIF from '../useGIF'
const Random =()=>{

    const {gif, fetchGif} = useGIF();
 
   
       
         
        return (
           <div className="container">
               <h1>Rnadom GIF</h1>
               <img width="300" src={gif} alt="random"></img>               
               <button onClick={fetchGif}>Random</button>
             
           </div>
        )
}

export default Random;