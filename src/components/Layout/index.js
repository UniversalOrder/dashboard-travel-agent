import React from 'react'
import './Layout.css'

const Layout = ({
  className,
  children,
  ...rest
}) => (
  <div className='Layout-wrapper'>
    <div className={`Layout-container ${className}`}>
      { children }
    </div>
  </div>
)

export default Layout
