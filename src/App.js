import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail '
import './style.css'



function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
        <Header/>
        <div  className="content-container">
          <Route path='/' exact component={Homepage} />
          <Route path='/Products' exact component={Products} />
          <Route path="/products/:id" component={ProductDetail}/>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
