import React from 'react'
import HeaderData from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <HeaderData/>
        <Outlet/>
    </>
  )
}

export default Layout