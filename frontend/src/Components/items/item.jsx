import React from 'react'
import './item.css'
function item(props) {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="items-prices">
            <div className="item-price-new">
                ₹{props.new_price * 50}
            </div>
            <div className="item-price-old">
                ₹{props.old_price * 60}
            </div>
        </div>
    </div>
  )
}

export default item
