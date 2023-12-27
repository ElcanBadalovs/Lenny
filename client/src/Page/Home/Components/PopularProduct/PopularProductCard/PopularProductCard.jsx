import React, { useEffect, useState } from "react";
import "./PopularProductCard.scss";
import { ReactComponent as StarIcon } from "../../../../../assets/icon/star.svg";
import { ReactComponent as Favorite } from "../../../../../assets/icon/favorite.svg";
import { ReactComponent as FavoriteActive } from "../../../../../assets/icon/favorite-active.svg";
import { Link } from "react-router-dom";
const PopularProductCard = ({ product, id }) => {
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
    <div className="popular-product-card">
      <div className="favorite-product">
        {favorite ? (
          <FavoriteActive onClick={handelFavoriteIcon} />
        ) : (
          <Favorite onClick={handelFavoriteIcon} />
        )}
      </div>
      <Link to={`/products/${id}`} className="link">
        <div className="popular-product-img-box">
          <img src={imageURL} />
        </div>
        <div className="popular-product-info">
          <div className="title-price">
            <h1 className="popular-product-title">{product?.title}</h1>
            <span className="popular-product-price">{product?.price}$</span>
          </div>
          <h3 className="popular-product-description">North Purwokerto</h3>
          <div className="popular-product-info-box">
            <StarIcon />
            <span className="popular-product-raiting">{product?.raiting}</span>
            <div className="popular-product-ellipse"></div>
            <span className="popular-product-sold">{`${product?.sold} Sold`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PopularProductCard;
