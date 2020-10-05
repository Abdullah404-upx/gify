import React from 'react';
import './App.css';
import Random from './Compos/Random_v2'
import Tag from './Compos/Tag_v2'

function App() {
  return (
    <div className="App">
    <h1>Random GIF app</h1>

    <div className="main-container">
     
      <Random></Random>
       <Tag></Tag>

    </div>


    </div>
  );
}

export default App;
