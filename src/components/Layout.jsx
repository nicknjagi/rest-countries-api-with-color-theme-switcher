import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'

const Layout = () => {
  return (
    <div className='container'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default Layout
