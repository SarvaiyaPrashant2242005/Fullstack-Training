import React from 'react'
import HeaderData from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Footer/Footer'

const Layout = () => {
  return (
    <>
        <HeaderData/>
        <Outlet/>
    
    </>
  )
}

export default Layout