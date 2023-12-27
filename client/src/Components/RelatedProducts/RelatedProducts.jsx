import React, { useState, useEffect } from "react";
import './RelatedProducts.scss'
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import { NavLink } from "react-router-dom";

const RelatedProducts = ({ products }) => {
  const [newProducts, setNewProducts] = useState(null);
  useEffect(() => {
    setNewProducts(products);
  }, [products]);
  return (
    <div className="related-products-content">
      <div className="related-products-header">
        <h2 className="related-products-header-text">Related Product</h2>
        <button className="related-products-header-btn">
          {" "}
          <NavLink className="related-products-link" to={'/searchresult'}>
            View Detail
          </NavLink>
        </button>
      </div>
      <div className="products-container">
        {newProducts &&
            newProducts.map((product, index) => {
            if (index < 4) {
              return <RelatedProduct key={index} id={product.id} product={product?.attributes} />;
            }
          })}
      </div>
    </div>
  );
};

export default RelatedProducts;
