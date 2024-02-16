import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const arr = ["Apple", "Banana", "Chair", "Elephant", "Guitar", 
  "Moon", "Ocean", "Pizza", "Sun", "Tree"];

function App() {
  const [count, setCount] = useState("");
  const [display,setDisplay] = useState(false);
  const [change,setChange] = useState(true);
  
  return (
    <>
      <p>Para Generator</p>
      <form action="">
        <input type="text" placeholder='Enter length of words' id="input" onChange={(e)=>{
          console.log(parseInt(e.target.value));
          setDisplay(false);
          if(parseInt(e.target.value)>0){
          setCount(parseInt(e.target.value));}else{
            setCount("");
          }
        }}/>
        <input type="button" value="Generate" onClick={(e)=>{
          console.log(typeof(count));
          setChange((e)=> !e);
          if( typeof count === 'number'){
          setDisplay(true)}else{
            setDisplay(false);
          }
        }}/>
        <Disp display={display} count={count} />
      </form>
    </>
  )
}

function Disp({display,count}){
    if(display){
      return <div>
        <Help count = {count}/>
      </div>
    }else{
      return <div></div>;
    }
}

function Help({count}){
  let s = "";
  while(count--){
    let ind = Math.floor(Math.random()*arr.length);
    s = s.concat(arr[ind]+" ");
  }
  return <div>{s}</div>
}

export default App
