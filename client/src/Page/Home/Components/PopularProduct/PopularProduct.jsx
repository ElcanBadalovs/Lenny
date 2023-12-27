import React, { useEffect, useState } from "react";
import "./PopularProduct.scss";
import PopularProductCard from "./PopularProductCard/PopularProductCard";
import { Link } from "react-router-dom";
const PopularProduct = ({ products }) => {
  const [newProducts, setNewProducts] = useState(null);
  useEffect(() => {
    setNewProducts(products);
  }, [products]);
  return (
    <div className="popular-product">
      <h1 className="popular-product-header-text">Popular Product on Lenny</h1>
      <p className="popular-product-text">
        Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
      </p>
      <div className="popular-product-container">
        {newProducts &&
          newProducts.map((product, index) => {
            if (index < 8) {
              return (
                <PopularProductCard
                  key={index}
                  id={product.id}
                  product={product?.attributes}
                />
              );
            }
          })}
      </div>
      <Link to={"/searchresult"}>
        <button className="popular-product-btn">Load More</button>
      </Link>
    </div>
  );
};

export default PopularProduct;
