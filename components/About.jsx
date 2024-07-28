import React from 'react'
import './About.css'

const About = () => {
  return (
    <div style={{width:"100%",height:"100vh",backgroundColor:"black",color:'white'}}>
      <h1 style={{display:"flex",justifyContent:'center',paddingTop:'70px',textDecoration:"underline",letterSpacing:"3px"}}>About me</h1>
<div id="left">
<img src="https://tse4.mm.bing.net/th?id=OIP.qpYPAeI5kot5rub3PLUIqwHaHa&pid=Api&P=0&h=180" style={{width:"300px",height:'400px',marginLeft:"80px",marginTop:"90px"}} alt="" />
</div>
<div id='right' style={{position:"absolute",left:"600px",top:"180px",width:"720px",fontSize:'22px'}}>
  <p>Hii I'm Prem Chaurasiya, a student and web developer currently in Second year pursuing Btech in Computer Engineering.</p>
  <div>
    <div style={{display:"flex",marginTop:"60px",fontSize:"24px",fontWeight:"720"}}>
      <p style={{width:"160px",color:"red",}}>HTML <span style={{color:"white"}}>&</span> <span style={{color:"blue"}}>CSS</span> </p>
      <div id='bar' style={{width:"500px",border:"1px solid white",height:"16px",marginTop:"7px",marginLeft:"25px",borderRadius:"100px"}}></div>
    </div>
    <div style={{display:"flex",marginTop:"60px",fontWeight:"720"}}>
      <p style={{width:"160px",color:"yellow"}}>JAVASCRIPT</p>
      <div id='bar' style={{width:"400px",backgroundColor:"green",border:"1px solid white",height:"16px",marginTop:"7px",marginLeft:"25px",borderRadius:"1000px"}}></div>
    </div>
    <div style={{display:"flex",marginTop:"60px",fontWeight:"720"}}>
      <p style={{width:"160px",color:"rgba(39, 140, 245, 1)"}}>REACT JS</p>
      <div id='bar' style={{width:"200px",backgroundColor:"green",border:"1px solid white",height:"16px",marginTop:"7px",marginLeft:"25px",borderRadius:"1000px"}}></div>
    </div>
    <div style={{display:"flex",marginTop:"60px",fontWeight:"720"}}>
      <p style={{width:"160px",color:"rgba(39, 220, 30, 1)"}}>GSAP</p>
      <div id='bar' style={{width:"220px",backgroundColor:"green",border:"1px solid white",height:"16px",marginTop:"7px",marginLeft:"25px",borderRadius:"1000px"}}></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
