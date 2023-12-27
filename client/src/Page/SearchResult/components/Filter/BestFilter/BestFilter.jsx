import React, { useState, useEffect } from "react";
import "./BestFilter.scss";
import { ReactComponent as TickSquare } from "../../../../../assets/icon/tick-square.svg";
import { ReactComponent as TickLinear } from "../../../../../assets/icon/tick-linear.svg";

import { ReactComponent as Star } from "../../../../../assets/icon/star.svg";
import { ReactComponent as ArrowIcon } from "../../../../../assets/icon/arrow-down.svg";
import { useSelector } from "react-redux";

const BestFilter = ({ addNewFilter }) => {
  const data = useSelector((state) => state?.searchProductSlice?.data);
  const [active, setActive] = useState(false);
  const [newData, setNewData] = useState(data);
  const handleActivate = () => {
    setActive(!active);
  };
  useEffect(() => {
    setNewData(data);
  }, [data]);
  return (
    <div className="filter-box">
      <div className="filter-box-header">
        <h3 className="filter-box-title">Best Filter</h3>
        <ArrowIcon
          className={`filter-arrow ${active ? "active-arrow" : ""}`}
          onClick={handleActivate}
        />
      </div>
      <div
        className={`filter-check-boxes ${
          active ? "active-filter-check-boxes" : ""
        }`}
      >
        <div className="filter-check-box">
          {newData && newData.some((item) => item.raiting === 4) ? (
            <TickLinear
              className="active-tick"
              onClick={() => {
                addNewFilter("raiting", 4);
              }}
            />
          ) : (
            <TickSquare
              onClick={() => {
                addNewFilter("raiting", 4);
              }}
            />
          )}
          <p className="check-box-name">
            <Star /> 4 stars or upper
          </p>
        </div>
        <div className="filter-check-box">
          <TickSquare />
          <p className="check-box-name">Same-day delivery</p>
        </div>
        <div className="filter-check-box">
          <TickSquare />
          <p className="check-box-name">COD</p>
        </div>
        <div className="filter-check-box">
          {newData && newData.some((item) => item.raiting === 4) ? (
            <TickLinear
              className="active-tick"
              onClick={() => {
                addNewFilter("discount", true);
              }}
            />
          ) : (
            <TickSquare
              onClick={() => {
                addNewFilter("discount", true);
              }}
            />
          )}
          <p className="check-box-name">Discount</p>
        </div>
      </div>
    </div>
  );
};

export default BestFilter;
