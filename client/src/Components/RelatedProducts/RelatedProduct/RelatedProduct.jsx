import React, { useState, useEffect } from "react";
import "./RelatedProduct.scss";
import { ReactComponent as StarIcon } from "../../../assets/icon/star.svg";
import { ReactComponent as Favorite } from "../../../assets/icon/favorite.svg";
import { ReactComponent as FavoriteActive } from "../../../assets/icon/favorite-active.svg";
import { Link } from "react-router-dom";
const RelatedProduct = ({ id, product }) => {
  const [imageURL, setImageURL] = useState(null);
  useEffect(() => {
    if (product) {
      const URL = `${import.meta.env.VITE_UPLOAD_IMG}${
        product?.thumbnail?.data?.attributes?.url
      }`;
      setImageURL(URL);
    }
  }, [product]);

  const [favorite, setFavorite] = useState(false);
  const handelFavoriteIcon = () => {
    if (!favorite) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };
  return (
    <div className="related-product-card">
      <div className="favorite-product">
        {favorite ? (
          <FavoriteActive onClick={handelFavoriteIcon} />
        ) : (
          <Favorite onClick={handelFavoriteIcon} />
        )}
      </div>
      <Link to={`/products/${id}`} className="related-link">
        <div className="related-product-img-box">
          <img src={imageURL} />
        </div>
        <div className="related-product-info">
          <div className="title-price">
            <h1 className="related-product-title">{product?.title}</h1>
            <span className="related-product-price">{product?.price}$</span>
          </div>
          <h3 className="related-product-description">North Purwokerto</h3>
          <div className="related-product-info-box">
            <StarIcon />
            <span className="related-product-raiting">{product?.raiting}</span>
            <div className="related-product-ellipse"></div>
            <span className="related-product-sold">{`${product?.sold} Sold`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RelatedProduct;
