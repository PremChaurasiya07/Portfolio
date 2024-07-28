import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import './Navbar.css'
import { useEffect } from 'react'

const Home = () => {
// const [video, setvideo] = useState(true)
  let name="Prem Chaurasiya 👋"  ;
  let index=1;
  function write(){
let check=document.getElementById("twriter");
check.innerHTML=name.slice(0,index);
(index>=name.length)?index=0:index++;
setTimeout(() => {
  write();
}, 300);

  } 
  useEffect(() => {
    write()
  }, [])
               
  return (
    <>
    <div id='Home'> 
  <video autoPlay src="../video/bg2.mp4" width={"100%"} height={"100%"} loop style={{position:'absolute',zIndex:-20,top:0,left:0,width:"100%",height:"100%",objectFit:"cover"}}></video>
<div id='img'>
  <img style={{width:"200px",height:"200px",position:"relative",top:'180px',left:"300px",borderRadius:"50%",border:"2px solid white"}} src="https://tse4.mm.bing.net/th?id=OIP.qpYPAeI5kot5rub3PLUIqwHaHa&pid=Api&P=0&h=180" alt="profil-img" />
</div>
<div id='info' style={{color:"red",position:"relative",left:"200px",top:"200px",width:"600px"}}>
  <p style={{fontSize:"40px",fontWeight:"600"}}>Hii i'm <span id="twriter" style={{fontSize:"50px",color:"rgb(0, 238, 255)"}}>Prem Chaurasiya</span> </p>
</div>
    </div>
   
   
    </>
  )
}

export default Home
