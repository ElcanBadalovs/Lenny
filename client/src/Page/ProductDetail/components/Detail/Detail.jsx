import React from "react";
import "./Detail.scss";
import { ReactComponent as TickCircle } from "../../../../assets/icon/tick-circle-green.svg";
const Detail = ({ product }) => {
  return (
    <div className="detail-container">
      <div className="detail-header">
        <h1 className="header-text">Detail Product</h1>
        <div className="line"></div>
        <h2 className="product-title">{product?.title}</h2>
        <h5 className="product-description">{product?.description}</h5>
      </div>
      <div className="detail-table">
        <div className="table-row">
          <h1 className="table-row-header">Specification</h1>
          <div className="Specification-table-col">
            <div className="table-key">Brand</div>
            <div className="table-value">Logitech</div>
          </div>
          <div className="Specification-table-col">
            <div className="table-key">Type</div>
            <div className="table-value">Wired</div>
          </div>
          <div className="Specification-table-col">
            <div className="table-key">Resolution</div>
            <div className="table-value">100-25600 dpi</div>
          </div>
          <div className="Specification-table-col">
            <div className="table-key">Max Speed</div>
            <div className="table-value">{">40G2"}</div>
          </div>
          <div className="Specification-table-col">
            <div className="table-key">Max Acceleration</div>
            <div className="table-value">{">300 IPS"}</div>
          </div>
        </div>
        <div className="table-row">
          <h1 className="table-row-header">In The Box</h1>
          <div className="InTheBox-table-col">
            <TickCircle className="table-product-icon" />
            <p className="table-product-name">
              G502 X LIGHTSPEED Wireless Gaming Mouse
            </p>
          </div>
          <div className="InTheBox-table-col">
            <TickCircle className="table-product-icon" />
            <p className="table-product-name">DPI-Shift button cover</p>
          </div>
          <div className="InTheBox-table-col">
            <TickCircle className="table-product-icon" />
            <p className="table-product-name">USB-C charging cable</p>
          </div>
          <div className="InTheBox-table-col">
            <TickCircle className="table-product-icon" />
            <p className="table-product-name">LIGHTSPEED USB-A receiver</p>
          </div>
          <div className="InTheBox-table-col">
            <TickCircle className="table-product-icon" />
            <p className="table-product-name">USB extension cable</p>
          </div>
          <div className="InTheBox-table-col">
            <TickCircle className="table-product-icon" />
            <p className="table-product-name">User Documentation</p>
          </div>
        </div>
        <div className="table-row">
          <h1 className="table-row-header">System Required</h1>
          <div className="SystemRequired-table-col">
            <p>- USB port</p>
            <p>- Internet access for optional software download</p>
            <p>- Windows® 10 or later</p>
            <p>- macOS 10.14 or later</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
