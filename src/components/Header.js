import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    )
  }
export default Header