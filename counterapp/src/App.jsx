import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(10);
  const addvalue=()=>{
    counter+=1;
   if(counter<=20){
    setcounter(counter);
    console.log(counter);
   }
  }
  const removevalue=()=>{
    counter=counter-1;
    if(counter>=0){
    setcounter(counter);
    console.log(counter);
    }
  }

  return (
    <>
    <h1>jai shree radhe shyam</h1>
    <br></br>
    <h2>Counter: {counter}</h2>
    <button onClick={addvalue}> add</button>
    <br></br>
    <button onClick={removevalue}>remove</button>

    </>
    
    

  )
}

export default App
