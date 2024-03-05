import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [col , setCol] = useState()

  return (
    <>
    <div className=''>
      <div className="p-5 text-slate-300"  style={{backgroundColor:col}}>
          <button className='bg-red-700 text-white py-2 px-4 rounded-md mr-2 hover:bg-red-800' onClick={() =>{document.body.style.backgroundColor = "red"}}>
            RED
          </button>
          <button className='bg-green-700 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-800' onClick={() =>{document.body.style.backgroundColor = "red"}}>
            GREEN
          </button>
          <button className='bg-gray-700 text-white py-2 px-4 rounded-md mr-2 hover:bg-gray-800' onClick={() =>{document.body.style.backgroundColor = "red"}}>
            GRAY
          </button>
          <button className='bg-blue-700 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-800' onClick={() =>{document.body.style.backgroundColor = "red"}}>
            BLUE
          </button>
          <button className='bg-orange-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-orange-600' onClick={() =>{document.body.style.backgroundColor = "red"}}>
            ORANGE
          </button>
          <button className='bg-purple-700 text-white py-2 px-4 rounded-md mr-2 hover:bg-purple-800' onClick={() =>{document.body.style.backgroundColor = "red"}}>
            PURPLE
          </button>
          <button className='bg-yellow-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-yellow-600' onClick={() =>{document.body.style.backgroundColor = "red"}}>
            YELLOW
          </button>
      </div>
      </div>
    </>
  )
}
export default App