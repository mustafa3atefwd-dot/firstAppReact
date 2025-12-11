import React from 'react'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer'


export default function Layout() {
  return <>

    <Navbar/>
    
    <Outlet></Outlet>

    <Footer/>
    </>
  
}
