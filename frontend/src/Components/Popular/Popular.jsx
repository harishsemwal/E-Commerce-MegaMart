import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Items/Items";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popluarinwomen")
    .then((response) => response.json())
    .then((data) => setPopularProducts(data))
  }, [])

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((product) => {
          return (
            <Item
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
