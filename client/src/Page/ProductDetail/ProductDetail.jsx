import React, { useState, useEffect } from "react";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { instance } from "../../utils/api";
import ProductImages from "./components/ProductImages/ProductImages";
import ProductBuy from "./components/ProductBuy/ProductBuy";
import Detail from "./components/Detail/Detail";
import MerchantInformation from "./components/MerchantInformation/MerchantInformation";
import Static from "./components/Static/Static";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { ReactComponent as StarIcon } from "../../assets/icon/star.svg";
import ReviewFilter from "./components/ReviewFilter/ReviewFilter";
import ReviewLists from "./components/ReviewLists/ReviewLists";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";
import DetailHeaderPagination from "./components/DetailHeaderPagination/DetailHeaderPagination";
const ProductDetail = () => {
  let { id } = useParams();
  const [active, setActive] = useState(false);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProductDetail = async () => {
      const res = await instance.get(`/products/${id}?populate=*`);
      setProduct(res.data);
    };
    fetchProductDetail();
    const fetchProducts = async () => {
      const res = await instance.get(`/products?populate=*`);
      setProducts(res.data);
    };
    fetchProducts();
    
  }, [id]);

  useEffect(() => {
    document.title = `Search result - ${product?.data?.attributes?.title}`;
  }, [product])
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="product-detail">
      <DetailHeaderPagination productName={product?.data?.attributes?.title} />
      <div className="product-buy-container">
        <ProductImages product={product?.data?.attributes} />
        <ProductBuy product={product?.data?.attributes} id={id} />
      </div>
      <Detail product={product?.data?.attributes} />
      <div className="detail-line"></div>
      <MerchantInformation />
      <div className="detail-line"></div>
      <div className="static-container">
        <div className="circle-Progress">
          <Static />
          <div className="circle-Progress-box">
            <div className="stars">
              <StarIcon className="star-icon" />
              <StarIcon className="star-icon" />
              <StarIcon className="star-icon" />
              <StarIcon className="star-icon" />
              <StarIcon className="star-icon" />
            </div>
            <p className="circle-Progress-text">from 1,25k reviews</p>
          </div>
        </div>
        <ProgressBar />
      </div>
      <div className="review">
        <ReviewFilter active={active} />
        <ReviewLists active={active} setActive={setActive} />
      </div>
      <div className="detail-line"></div>
      <RelatedProducts products={products?.data} />
    </div>
  );
};

export default ProductDetail;
