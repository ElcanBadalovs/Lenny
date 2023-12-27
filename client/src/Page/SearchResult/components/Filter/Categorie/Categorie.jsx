import React, { useState, useEffect } from "react";
import { ReactComponent as TickSquare } from "../../../../../assets/icon/tick-square.svg";
import { ReactComponent as TickLinear } from "../../../../../assets/icon/tick-linear.svg";
import { ReactComponent as ArrowIcon } from "../../../../../assets/icon/arrow-down.svg";
import { useSelector } from "react-redux";

const Categorie = ({ addNewFilter }) => {
  const data = useSelector((state) => state?.searchProductSlice?.data);
  const [active, setActive] = useState(false);
  const [checkActive, setCheckActivate] = useState(false);
  const [newData, setNewData] = useState(data);
  const handleActivate = () => {
    setActive(!active);
  };

  const handleCheckActivate = () => {
    setCheckActivate(!checkActive);
  };

  useEffect(() => {
    setNewData(data);
  }, [data]);
  return (
    <div className="filter-box">
      <div className="filter-box-header">
        <h3 className="filter-box-title">Category</h3>
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
        <div className="check-box-container">
          <div className="filter-check-box">
            {newData && newData.some((item) => item.categories === 'Electronics') ? (
              <TickLinear
                className="active-tick"
                onClick={() => {
                  addNewFilter("categories", "Electronics");
                }}
              />
            ) : (
              <TickSquare
                onClick={() => {
                  addNewFilter("categories", "Electronics");
                }}
              />
            )}
            <p className="check-box-name">Electronic</p>
          </div>
          <ArrowIcon
            className={`filter-arrow ${checkActive ? "active-arrow" : ""}`}
          />
        </div>
        <div className="check-box-container">
          <div className="filter-check-box">
            {newData && newData.some((item) => item.categories === 'Fashion') ? (
              <TickLinear
                className="active-tick"
                onClick={() => {
                  addNewFilter("categories", "Fashion");
                }}
              />
            ) : (
              <TickSquare
                onClick={() => {
                  addNewFilter("categories", "Fashion");
                }}
              />
            )}
            <p className="check-box-name">Fashion</p>
          </div>
          <ArrowIcon
            className={`filter-arrow ${checkActive ? "active-arrow" : ""}`}
            onClick={handleCheckActivate}
          />
        </div>
        <div className="check-box-container">
          <div className="filter-check-box">
            {newData && newData.some((item) => item.categories === 'Action Figure') ? (
              <TickLinear
                className="active-tick"
                onClick={() => {
                  addNewFilter("categories", "Action Figure");
                }}
              />
            ) : (
              <TickSquare
                onClick={() => {
                  addNewFilter("categories", "Action Figure");
                }}
              />
            )}
            <p className="check-box-name">Action Figure</p>
          </div>
          <ArrowIcon
            className={`filter-arrow ${checkActive ? "active-arrow" : ""}`}
            onClick={handleCheckActivate}
          />
        </div>
        <div className="check-box-container">
          <div className="filter-check-box">
            {newData && newData.some((item) => item.categories === 'Accessory') ? (
              <TickLinear
                className="active-tick"
                onClick={() => {
                  addNewFilter("categories", "Accessory");
                }}
              />
            ) : (
              <TickSquare
                onClick={() => {
                  addNewFilter("categories", "Accessory");
                }}
              />
            )}
            <p className="check-box-name">Accessory</p>
          </div>
          <ArrowIcon
            className={`filter-arrow ${checkActive ? "active-arrow" : ""}`}
            onClick={handleCheckActivate}
          />
        </div>
        <div className="check-box-container">
          <div className="filter-check-box">
            {newData && newData.some((item) => item.categories === 'Book') ? (
              <TickLinear
                className="active-tick"
                onClick={() => {
                  addNewFilter("categories", "Book");
                }}
              />
            ) : (
              <TickSquare
                onClick={() => {
                  addNewFilter("categories", "Book");
                }}
              />
            )}
            <p className="check-box-name">Book</p>
          </div>
          <ArrowIcon
            className={`filter-arrow ${checkActive ? "active-arrow" : ""}`}
            onClick={handleCheckActivate}
          />
        </div>
        <div className="check-box-container">
          <div className="filter-check-box">
            {newData && newData.some((item) => item.categories === 'Gaming') ? (
              <TickLinear
                className="active-tick"
                onClick={() => {
                  addNewFilter("categories", "Gaming");
                }}
              />
            ) : (
              <TickSquare
                onClick={() => {
                  addNewFilter("categories", "Gaming");
                }}
              />
            )}
            <p className="check-box-name">Gaming</p>
          </div>
          <ArrowIcon
            className={`filter-arrow ${checkActive ? "active-arrow" : ""}`}
            onClick={handleCheckActivate}
          />
        </div>
      </div>
    </div>
  );
};

export default Categorie;
