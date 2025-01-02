import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router'


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout