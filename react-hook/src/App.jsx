import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState('olive')

  return (
    <>
    <div className='h-screen w-full duration-200' style={{backgroundColor:color}}> 
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' onClick={()=>setColor("#BDB2FF")}
        style={{backgroundColor:"#BDB2FF"}}>Test</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' onClick={()=>setColor("#A0C4FF")}
        style={{backgroundColor:"#A0C4FF"}}>Test</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' onClick={()=>setColor("#9BF6FF")}
        style={{backgroundColor:"#9BF6FF"}}>Test</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' onClick={()=>setColor("#CAFFBF")}
        style={{backgroundColor:"#CAFFBF"}}>Test</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' onClick={()=>setColor("#FDFFB6")}
        style={{backgroundColor:"#FDFFB6"}}>Test</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' onClick={()=>setColor("#FFD6A5")}
        style={{backgroundColor:"#FFD6A5"}}>Test</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black' onClick={()=>setColor("#FFADAD")}
        style={{backgroundColor:"#FFADAD"}}>Test</button>


      </div>

    </div>
    </div>
     </>
  )
}

export default App
