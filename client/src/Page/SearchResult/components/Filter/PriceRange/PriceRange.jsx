import React, { useState, useEffect } from "react";
import "./PriceRange.scss";
import { ReactComponent as ArrowIcon } from "../../../../../assets/icon/arrow-down.svg";
import { useDispatch } from "react-redux";
import { addNewPrice } from "../../../../../redux/searchProductSlice";
const PriceRange = ({ addNewFilter }) => {
  const [active, setActive] = useState(false);
  const handleActivate = () => {
    setActive(!active);
  };
  const dispatch = useDispatch();
  const addNewPriceFilter = (key, value) => {
    dispatch(addNewPrice({ stateName: key, data: value }));
  };

  const handlePrice = (minPrice, maxPrice) => {
    addNewPriceFilter("minPrice", minPrice);
    addNewPriceFilter("maxPrice", maxPrice);
  };
  return (
    <div className="filter-box">
      <div className="filter-box-header">
        <h3 className="filter-box-title">Price Range</h3>
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
        <div className="price-range-box">
          <div className="price-range">
            <select className="currency">
              <option>USD</option>
              <option>AZN</option>
              <option>EUR</option>
            </select>
            <div className="price-range-line"></div>
            <input
              className="price"
              placeholder="Minimum price"
              onChange={(e) => addNewPriceFilter("minPrice", e.target.value)}
            />
          </div>
          <div className="price-range">
            <select className="currency">
              <option>USD</option>
              <option>AZN</option>
              <option>EUR</option>
            </select>
            <div className="price-range-line"></div>
            <input
              className="price"
              placeholder="Maximum price"
              onChange={(e) => addNewPriceFilter("maxPrice", e.target.value)}
            />
          </div>
          <button className="min-max-price" onClick={() => handlePrice(0, 200)}>
            $0 - $200
          </button>
          <button
            className="min-max-price"
            onClick={() => handlePrice(200, 500)}
          >
            $200 - $500
          </button>
          <button
            className="min-max-price"
            onClick={() => handlePrice(500, 1500)}
          >
            $500 - $1500
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
