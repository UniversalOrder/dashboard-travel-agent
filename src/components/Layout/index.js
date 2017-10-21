import React from 'react'
import './Layout.css'
import Footer from '../Footer'

const Layout = ({
  className,
  children,
  ...rest
}) => (
  <div className='Layout-wrapper'>
    <div className={`Layout-container ${className}`}>
      { children }
    </div>
    <Footer />
  </div>
)

export default Layout
