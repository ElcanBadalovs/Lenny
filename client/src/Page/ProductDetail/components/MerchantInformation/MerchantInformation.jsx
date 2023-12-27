import React from "react";
import "./MerchantInformation.scss";
import { ReactComponent as MessageIcon } from "../../../../assets/icon/message.svg";
import { ReactComponent as ShopIcon } from "../../../../assets/icon/shop.svg";

const MerchantInformation = () => {
  return (
    <div className="merchant-information">
      <h1 className="merchant-information-header">Merchant information</h1>
      <div className="profil-card">
        <div className="profil-info">
          <div className="firma-logo"></div>
          <div className="firma-info">
            <h2 className="firma-name">Logitech Indonesia</h2>
            <p className="user-name">Jakarta Pusat</p>
            <div className="profil-hashtag">
              <div className="hashtag">Top Rated Merchant</div>
              <div className="hashtag">Best Merchant</div>
            </div>
          </div>
        </div>
        <div className="profil-card-btns">
          <button className="profil-card-btn">
            <MessageIcon /> Chat
          </button>
          <button className="profil-card-btn">
            <ShopIcon /> Visit Merchant
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantInformation;
