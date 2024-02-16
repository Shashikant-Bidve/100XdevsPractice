import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bg from './Components/Bg.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bg></Bg>
    </>
  )
}

export default App
