import React, { useState, useEffect } from "react";
import "./ProductImages.scss";
import { ReactComponent as ArrowIcon } from "../../../../assets/icon/arrow-down.svg";
const productImages = ({ product }) => {
  const [images, setImages] = useState([]);
  const [imageNumber, setImageNumber] = useState(0);
  const URL = `${import.meta.env.VITE_BASE_URL}${
    images[imageNumber]?.attributes?.url
  }`;
  useEffect(() => {
    setImages(product?.images?.data);
  }, [product]);

  const handleProductThumbnail = (value) => {
    setImageNumber(value);
  };
  const nextImage = () => {
    if (imageNumber < 3) {
      setImageNumber(imageNumber + 1);
    }
  };
  const prevImage = () => {
    if (imageNumber > 0) {
      setImageNumber(imageNumber - 1);
    }
  };
  return (
    <div className="product-images-container">
      <div className="thumbnail-box">
        <div className="arrow-box-left" onClick={prevImage}>
          <ArrowIcon className="arrow-left" />
        </div>
        <img className="thumbnail-product" src={URL}></img>
        <div className="arrow-box-right" onClick={nextImage}>
          <ArrowIcon className="arrow-right" />
        </div>
      </div>
      <div className="product-images">
        {images &&
          images.map((image, index) => {
            return (
              <div
                className={`image-box ${
                  index == imageNumber ? "active-image-box" : ""
                }`}
                key={index}
                onClick={() => handleProductThumbnail(index)}
              >
                <img
                  className="product-image"
                  src={`${import.meta.env.VITE_UPLOAD_IMG}${
                    image?.attributes?.url
                  }`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default productImages;
