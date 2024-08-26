import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [ProductDetails, setProductDetails] = useState({
    name: "",
    old_price: "",
    new_price: "",
    category: "women",
    image: null,
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
    setProductDetails({ ...ProductDetails, image: e.target.files[0] });
  };

  const changeHandler = (e) => {
    setProductDetails({ ...ProductDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(ProductDetails);
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          type="text"
          name="name"
          value={ProductDetails.name}
          onChange={changeHandler}
          placeholder="Type Here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            value={ProductDetails.old_price}
            onChange={changeHandler}
            placeholder="Type Here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            name="new_price"
            value={ProductDetails.new_price}
            onChange={changeHandler}
            placeholder="Type Here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          name="category"
          value={ProductDetails.category}
          onChange={changeHandler}
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnail-img"
            alt=""
          />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          onChange={imageHandler}
          hidden
        />
      </div>
      <button onClick={Add_Product} className="addproduct-btn">
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
