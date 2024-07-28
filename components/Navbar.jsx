import React from 'react'
import'./Navbar.css'
import Home from './Home'
import About from './About'
import { NavLink,Link ,Outlet} from 'react-router-dom'

import { useState } from 'react'
const Navbar = () => {

  return (
    <>
    <div id='body'>
    <div id='Navbar'>
     <NavLink  to={"/"}><img src='../components/icon/p LOGO.png' width={"50px"} height={"50px"} alt='logo' style={{marginLeft:"30px",marginTop:"8px"}}></img></NavLink> 
      <ul>
     <NavLink style={{textDecoration:'none'}} to={"/"}><li>Home</li></NavLink> 
      <NavLink style={{textDecoration:'none'}} to={"/About"}><li >About</li></NavLink>
      <NavLink style={{textDecoration:'none'}} to={"/Project"}><li>Project</li></NavLink>
      <NavLink style={{textDecoration:'none'}} to={"/Contact"}><li>Contact</li></NavLink>
  
      </ul>
    </div>
    <Outlet></Outlet>
    </div>
    </>
    
  )
}

export default Navbar
