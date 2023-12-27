import React, { useEffect, useState } from "react";
import "./HeaderProductCard.scss";
import { ReactComponent as StarIcon } from "../../../../assets/icon/star.svg";
import { ReactComponent as Favorite } from "../../../../assets/icon/favorite.svg";
import { ReactComponent as FavoriteActive } from "../../../../assets/icon/favorite-active.svg";
import { Link } from "react-router-dom";
const headeProductCard = ({ category }) => {
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState(null);
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    setProduct(category?.data[1]?.attributes?.products?.data[1].attributes);
    setProductId(category?.data[1]?.attributes?.products?.data[1].id);
  }),
    [category];

  const URL = `${import.meta.env.VITE_UPLOAD_IMG}${
    product?.thumbnail?.data?.attributes?.url
  }`;

  const handelFavoriteIcon = () => {
    if (!favorite) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };

  return (
    <div className="product-card">
      <div className="favorite">
        {favorite ? (
          <FavoriteActive onClick={handelFavoriteIcon} />
        ) : (
          <Favorite onClick={handelFavoriteIcon} />
        )}
      </div>
      <Link to={`/products/${productId}`}>
        <div className="product-img-box">
          <img src={URL} className="product-img" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <h3 className="product-description">{product?.description}</h3>
          <div className="product-info-box">
            <StarIcon />
            <span className="product-raiting">{product?.raiting}</span>
            <div className="product-ellipse"></div>
            <span className="product-sold">{`${product?.sold} Sold`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default headeProductCard;
