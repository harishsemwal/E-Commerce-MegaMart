import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
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
    let product = ProductDetails;

    let formData = new FormData();
    formData.append("product", image);

    try {
      // Updated URL for image upload
      const uploadResponse = await fetch("https://e-commerce-megamart-backend.onrender.com/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const responseData = await uploadResponse.json();

      if (responseData.success) {
        product.image = responseData.image_url;
        console.log(product);

        // Updated URL for adding a product
        const addProductResponse = await fetch(
          "https://e-commerce-megamart-backend.onrender.com/addproduct",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );

        const addProductData = await addProductResponse.json();

        if (addProductData.success) {
          alert("Product added successfully");
        } else {
          alert("Product not added successfully");
        }
      } else {
        alert("Image upload failed");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    }
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
