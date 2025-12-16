import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState("orange")


  return (
        <div className='w-full h-screen' style={{ backgroundColor: colour }}
        >
          <div className='flex flex-col items-center justify-center h-full gap-4'
          >
          <div className='flex flex-wrap gap-4'>
            <button className='bg-white px-4 py-2 rounded shadow' onClick={() => setColour("red")}>red</button>
            <button className='bg-white px-4 py-2 rounded shadow' onClick={() => setColour("blue")}>Blue</button>
            <button className='bg-white px-4 py-2 rounded shadow' onClick={() => setColour("green")}>Green</button>
            <button className='bg-white px-4 py-2 rounded shadow' onClick={() => setColour("purple")}>Purple</button>
            <button className='bg-white px-4 py-2 rounded shadow' onClick={() => setColour("orange")}>Orange</button>


          </div>
        



         
        </div>

        </div>
  
  )
}

export default App
