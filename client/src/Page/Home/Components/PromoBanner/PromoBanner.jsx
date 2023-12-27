import React from "react";
import "./PromoBanner.scss";
import IpadAir2021 from "../../../../assets/image/iPadAir2020.png";

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-banner-container">
        <img className="promo-banner-img" src={IpadAir2021} />
        <div className="promo-banner-box">
          <h4 className="promo-banner-title">Ipad Air Gen 5</h4>
          <p className="promo-banner-description">
            Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
            sapien quam risus sed diam.
          </p>
          <div className="promo-banner-btns">
            <button className="btn-buy">Buy Now</button>
            <button className="btn-view">View Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
