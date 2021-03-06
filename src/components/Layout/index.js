import React from 'react'
import './Layout.css'

const Layout = ({
  className,
  children,
  ...rest
}) => (
  <div className='Layout-wrapper'>
    <div className={`Layout-container ${className}`}>
      <div className="travel-agent">CRYPTO-AIRLINE.com</div>
      { children }
    </div>
  </div>
)

export default Layout
