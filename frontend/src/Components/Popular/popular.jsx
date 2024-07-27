import React from 'react';
import './popular.css';
import data_product from '../Assests/data';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => {
          return (
            <div key={item.id} className='item'>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>NEW</p>
              <p>Rs. {item.new_price}</p>
              <p>Rs. {item.old_price}</p>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;