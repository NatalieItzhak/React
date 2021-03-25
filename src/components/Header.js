import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/products">Products</Link>
      </div>
    )
  }
export default Header