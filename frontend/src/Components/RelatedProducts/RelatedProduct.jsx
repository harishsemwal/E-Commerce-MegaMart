import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assests/data'
import Item from '../Items/item'
function RelatedProduct() {
  return (
    <div className='RelatedProduct'>
        <h1>Related Products</h1>
        <hr />
        <div className='Related-Products-item'>
            {data_product.map((item, i)=>{
                return (
                    <Item 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default RelatedProduct
