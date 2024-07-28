import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from '../components/Home.jsx';
import Navbar from '../components/Navbar.jsx';
import Project from '../components/Project.jsx';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
const router=createBrowserRouter(
  [
    {path:'/',
      element:<Navbar/>,
      children:[
        {path:'/',
          element:<Home/>
        },
        {path:'/Project',
          element:<Project/>
        },
        {path:'/About',
          element:<About/>
        },
        {path:'/Contact',
          element:<Contact/>
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}></RouterProvider>
)
