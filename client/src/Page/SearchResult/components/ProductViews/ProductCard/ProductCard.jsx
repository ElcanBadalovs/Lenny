import React, { useState, useEffect } from 'react'
import './ProductCard.scss'
import { ReactComponent as StarIcon } from "../../../../../assets/icon/star.svg";
import { ReactComponent as Favorite } from "../../../../../assets/icon/favorite.svg";
import { ReactComponent as FavoriteActive } from "../../../../../assets/icon/favorite-active.svg";
import { Link, useParams } from 'react-router-dom';


const ProductCard = ({layout, product}) => {
    const [imageURL, setImageURL] = useState(null);
    const { category } = useParams();
  useEffect(() => {
    if (product) {
      const URL = `${import.meta.env.VITE_UPLOAD_IMG}${
        product?.attributes?.thumbnail?.data?.attributes?.url
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
    <div className={`product-card ${layout ? 'block-style' : ''}`}>
      <div className="favorite-product">
        {favorite ? (
          <FavoriteActive onClick={handelFavoriteIcon} />
        ) : (
          <Favorite onClick={handelFavoriteIcon} />
        )}
      </div>
      <Link to={`${category ? `/${category}/products/${product.id}` : `/products/${product.id}` }`} className='product-block-style'>
      <div className="product-img-box">
        <img src={imageURL} className='product-img'/>
      </div>
      <div className="product-info">
        <div className="title-price">
          <h1 className="product-title">{product?.attributes?.title}</h1>
          <span className="product-price">${product?.attributes?.price}</span>
        </div>
        <h3 className="product-description">North Purwokerto</h3>
        <div className="product-info-box">
          <StarIcon className='star-icon'/>
          <span className="product-raiting">{product?.attributes?.raiting}</span>
          <div className="product-ellipse"></div>
          <span className="product-sold">{`${product?.attributes?.sold} Sold`}</span>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default ProductCard
