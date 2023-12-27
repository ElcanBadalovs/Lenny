import React, { useState, useEffect } from "react";
import "./ReviewFilterTopics.scss";
import { ReactComponent as ArrowIcon } from "../../../../../assets/icon/arrow-down.svg";
import { ReactComponent as TickSquare } from "../../../../../assets/icon/tick-linear.svg";
import { useSelector } from "react-redux";

const ReviewFilterTopics = ({ addNewFilter }) => {
  const data = useSelector((state) => state?.ReviewFilterSlice?.data);
  const [activate, setActivate] = useState(false);
  const [newData, setNewData] = useState(data);
  const handleActivate = () => {
    setActivate(!activate);
  };
  useEffect(() => {
    setNewData(data);
  }, [data]);

  return (
    <div className="review-filter-box">
      <div className="review-filter-box-header">
        <h3 className="review-filter-box-title">Review Topics</h3>
        <ArrowIcon
          className={`review-filter-arrow ${activate ? "active-arrow" : ""}`}
          onClick={handleActivate}
        />
      </div>
      <div
        className={`review-filter-check-boxes ${
          activate ? "active-filter-check-boxes" : ""
        }`}
      >
        <div className="review-filter-check-box">
          <TickSquare
            className={
              newData &&
              newData.some((item) => item.topics === "Product Quality")
                ? "active-tick"
                : ""
            }
            onClick={() => {
              addNewFilter("topics", "Product Quality");
            }}
          />
          <p className="review-filter-check-box-name">Product Quality</p>
        </div>
        <div className="review-filter-check-box">
          <TickSquare
            className={
              newData &&
              newData.some((item) => item.topics === "Seller Services")
                ? "active-tick"
                : ""
            }
            onClick={() => {
              addNewFilter("topics", "Seller Services");
            }}
          />
          <p className="review-filter-check-box-name">Seller Services</p>
        </div>
        <div className="review-filter-check-box">
          <TickSquare
            className={
              newData && newData.some((item) => item.topics === "Product Price")
                ? "active-tick"
                : ""
            }
            onClick={() => {
              addNewFilter("topics", "Product Price");
            }}
          />
          <p className="review-filter-check-box-name">Product Price</p>
        </div>
        <div className="review-filter-check-box">
          <TickSquare
            className={
              newData && newData.some((item) => item.topics === "Shipment")
                ? "active-tick"
                : ""
            }
            onClick={() => {
              addNewFilter("topics", "Shipment");
            }}
          />
          <p className="review-filter-check-box-name">Shipment</p>
        </div>
        <div className="review-filter-check-box">
          <TickSquare
            className={
              newData &&
              newData.some((item) => item.topics === "Match with Description")
                ? "active-tick"
                : ""
            }
            onClick={() => {
              addNewFilter("topics", "Match with Description");
            }}
          />
          <p className="review-filter-check-box-name">Match with Description</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilterTopics;
