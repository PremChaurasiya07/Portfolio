import { useState } from 'react'
import './App.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

import Navbar from '../components/Navbar';
import Home from '../components/Home';


gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin,TextPlugin);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar></Navbar>
    </>
  )
}

export default App
