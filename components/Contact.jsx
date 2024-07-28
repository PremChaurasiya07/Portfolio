import React from 'react'
import { useEffect } from 'react';
import "./Contact.css"
const Contact = () => {

  return (
    <div style={{backgroundColor:"black",width:"100vw",height:"100vh",color:"white"}}>
      <p id="text" style={{position:"relative",top:"130px",left:"550px",width:"500px",fontSize:"50px",wordSpacing:"1px",letterSpacing:"5px",fontWeight:"750"}}>Let's Collaborate</p>
      <div style={{position:"relative",top:"380px"}}>
        <ul style={{display:"flex",justifyContent:"space-evenly",listStyle:"none"}}>
          <li className="move"><a href=''><img src="../components/icon/instagram.png"  /></a></li>
          <li className="move"><a href=""><img src="../components/icon/gmail.png"  /></a></li>
          <li className="move"><a href=""><img src="../components/icon/facebook.png"  /></a></li>
          <li className="move"><a href=""><img src="../components/icon/git.png"  /></a></li>
        </ul>
      </div>
  
    </div>
  )
}

export default Contact
