import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [help,setHelp] = useState(0);
  useEffect(()=>{
    console.log("Hi");
    fetch("https://api.github.com/users/Shashikant-Bidve").then(
      res => res.json()).then((data)=>
      setCount(data.bio)
      );
  },[]);
  return (
    <>
      {count}
      <br />
      <br />
      <button onClick={(e)=>{
        setHelp(help+1);
      }}>{help}</button>
    </>
  )
}

export default App
