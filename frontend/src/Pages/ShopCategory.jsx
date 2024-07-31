import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
// import all_products from '../Components/Assests/all_product';
import dropdown_icon from '../Components/Assests/dropdown_icon.png'

import Item from '../Components/Items/Item.jsx';

const ShopCategory = (props) => {
    const { all_products } = useContext(ShopContext)
    return (
        <>
            <div className='shop-category'>
                <img className = 'shop-category-banner' src={props.banner} alt="" />
            </div>

            <div className="shop-category-sort-index">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className='shopcategory-sort'>
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className='shopcategory-products'>
                {all_products.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={i}
                                image={item.image}
                                name={item.name}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className='center'>
            <div className="shop-catrgory-loadmore">
                Explore More
            </div>
            </div>
        </>
    )
}

export default ShopCategory