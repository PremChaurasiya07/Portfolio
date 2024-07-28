import React, { useState } from 'react'

const Backgroundpointer = () => {
    const [point, setpoint] = useState({x:0,y:0})
  return (
    <div style={{transform: `translate(${point.x}px, ${point.y}px)`,backgroundColor:"green",position:"absolute",width:"100%",height:"100%"}} onPointerMove={(e)=>(
     setpoint({x:e.clientX,y:e.clientY})
    )}>
      hii
    </div>
  )
}

export default Backgroundpointer
