import React from 'react'
import './style.css'
import { useState } from 'react';

function Bg() {
    const [color,setColor] = useState("white");
    
  return (
    <div className='body' style={{background:color,height:"100vh",
        width: "100vw"}}>
        <div className="container">
            <button className="Red" onClick={()=>setColor("red")}>Red</button>
            <button className="Yellow" onClick={()=>setColor("yellow")}>Yellow</button>
            <button className="Purple" onClick={()=>setColor("purple")}>Purple</button>
            <button className="Cyan" onClick={()=>setColor("cyan")}>Cyan</button>
        </div>
    </div>
  )
}

export default Bg;