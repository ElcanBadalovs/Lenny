import React, { useState, useEffect } from "react";
import "./ProductBuy.scss";
import { ReactComponent as StarIcon } from "../../../../assets/icon/star.svg";
import { ReactComponent as ShoppingCard } from "../../../../assets/icon/shopping-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { newProductID } from "../../../../redux/buyProductsList";
import { userData } from "../../../../Components/helpers";
import { Link } from "react-router-dom";
import { addProductID } from "../../../../redux/buyProductCount";
import { useParams } from "react-router-dom";
import { addLog } from "../../../../redux/logSlice";

const ProductBuy = ({ product }) => {
  const { jwt } = userData();
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  let newDescription = productInfo?.description;
  useEffect(() => {
    setProductInfo(product);
  }, [product]);
  const windowSize = window.innerWidth;
  if (windowSize <= 1024) {
    newDescription = `${productInfo?.description.slice(0, 129)}...`;
  } else if (windowSize >= 1024 || windowSize < 1440) {
    newDescription = `${productInfo?.description.slice(0, 161)}...`;
  } else if (windowSize >= 1440) {
    newDescription = productInfo?.description;
  }

  const handleDescription = () => {
    newDescription = productInfo?.description;
  };
  const dispatch = useDispatch();
  const handleBuyProducs = (value) => {
    if (jwt) {
      dispatch(
        newProductID({
          companyName: product?.companies?.data[0]?.attributes?.title,
          product: product,
          id: value,
        })
      );
      dispatch(addProductID({ id: value }));
    }
  };

  const openLogin = (value) => {
    dispatch(addLog({ log: value }));
  };
  return (
    <div className="product-buy">
      <h1 className="product-name">{productInfo?.title}</h1>
      <div className="product-info-box">
        <StarIcon className="star-icon" />
        <span className="product-raiting">{productInfo?.raiting}</span>
        <div className="product-ellipse"></div>
        <span className="product-sold">{`${productInfo?.sold} Sold`}</span>
      </div>
      <p className="product-price">${productInfo?.price}</p>
      <h6 className="product-description">
        {newDescription}
        <span className="description-read" onClick={() => handleDescription()}>
          Read More
        </span>
      </h6>
      <div className="line"></div>
      <h3 className="product-variant-title">Product Variant:</h3>
      <div className="product-variant-container">
        <div className="product-variant-box">
          <p className="product-variant">Type</p>
          <select className="product-variant-select">
            <option>Wireless</option>
            <option>brend</option>
          </select>
        </div>
        <div className="product-variant-box">
          <p className="product-variant">Color</p>
          <select className="product-variant-select">
            <option>Black</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
        </div>
      </div>
      <div className="product-buy-btns">
        <Link
          to={"/shoppingcart"}
          className="buy-btn"
          onClick={() => handleBuyProducs(id)}
        >
          <button className="product-buy">Buy Now</button>
        </Link>
        <button
          className="add-product"
          onClick={() => {
            handleBuyProducs(id);
            if (!jwt) {
              openLogin("login");
            }
          }}
        >
          <ShoppingCard className="shopping-card" />
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default ProductBuy;
