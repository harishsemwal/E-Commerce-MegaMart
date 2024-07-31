import React, { useContext } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums';

function Product() {
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_products.find((e) => e.id === Number(productId))
  return (
    <div>
        <Breadcrums product={product}/>
    </div>
  )
}

export default Product
