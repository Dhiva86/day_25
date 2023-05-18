import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nopage() {
    const navigatr = useNavigate()
  return (
    <div>
     <h2>404 Error </h2>
     <h4>Click to go to Home</h4>
     <button onClick={()=>navigatr("/")}>Home</button>

    </div>
  )
}

export default Nopage