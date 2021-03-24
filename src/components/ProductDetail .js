import React from 'react';
import {Route, useParams, Link } from 'react-router-dom';
import Storedata from '../store'


const ProductDetail = () => {
    return(
      <div>
        <h2>{Storedata.itle}</h2>
        <div>Price: {Storedata.price} $</div>
        <div>
          <img src={Storedata.imageUrl} alt={Storedata.title}/>
        </div>
          <button>Back<Link to='/Products'></Link></button>
      </div>
    );

  
}


export default ProductDetail;