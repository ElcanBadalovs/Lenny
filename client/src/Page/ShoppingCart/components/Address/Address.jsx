import React from "react";
import "./Address.scss";
import { ReactComponent as Location } from "../../../../assets/icon/location.svg";
import { userData } from "../../../../Components/helpers";
const Address = ({checkout}) => {
  const { user } = userData();
  return (
    <div className={`address ${checkout ? 'active-address' : ''}`}>
      <h1 className="address-header">Address</h1>
      <div className="address-container">
        <div className="address-box">
          <Location className="location-icon" />
          <div className="address-text">
            <div className="address-text-header">
              <h4 className="username">{user?.username}</h4>
              <div className="tag">Main Address</div>
            </div>
            <p className="address-info">081277939572</p>
            <p className="address-info">
              2021 Royalty Boulevard Portland, OR 98199
            </p>
          </div>
        </div>
        <button className="add-address">Add New Address</button>
      </div>
    </div>
  );
};

export default Address;
