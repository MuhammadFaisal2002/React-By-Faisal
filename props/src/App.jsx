// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='bg-red-700 text-inherit p-5 rounded-xl' >
        REact and tailwind css
      </h1>
      
     <Card />
     <Card username="Muhammad"/>

    </>
  )
}

export default App
