import React, { useContext } from "react";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProducts/RelatedProduct";

function Product() {
  const { all_products } = useContext(ShopContext);
  const { productid } = useParams();  
  const product = all_products.find((e) => e.id === Number(productid));
  if (!product) {
    return <div>Product not found</div>;
  }
  

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct category={product.category} />
    </div>
  );
}

export default Product;
