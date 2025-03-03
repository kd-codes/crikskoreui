import React from 'react'
import logo from './logo.svg';

const Header = () => {
  return (
    <header>
        <div className="logo-container">
          <img src={logo} alt="CrikSkore Logo"  className="logo"/>
        </div>
    </header>
  )
}

export default Header
