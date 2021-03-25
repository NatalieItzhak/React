import React from 'react';
import { Route, useLocation, Link } from 'react-router-dom';


const ProductDetail = (props) => {
  const location = useLocation();
  const { title, price, imageUrl } = location.state;


  function backToList() {
    props.history.goBack()
  }

  return (
    <div>
      <h2>{title}</h2>
      <div>Price: {price} $</div>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <button  onClick={backToList}>Back</button>
    </div>
  );


}

export default ProductDetail;