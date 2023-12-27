import React, { useState, useEffect } from "react";
import "./Location.scss";
import { ReactComponent as TickSquare } from "../../../../../assets/icon/tick-square.svg";
import { ReactComponent as TickLinear } from "../../../../../assets/icon/tick-linear.svg";
import { ReactComponent as ArrowIcon } from "../../../../../assets/icon/arrow-down.svg";
import { useSelector } from "react-redux";
const Location = ({ addNewFilter }) => {
  const data = useSelector((state) => state?.searchProductSlice?.data);
  const [active, setActive] = useState(false);
  const [newData, setNewData] = useState(data);
  const handleActivate = () => {
    setActive(!active);
  };
  useEffect(() => {
    setNewData(data);
  }, [data]);
  console.log(data);

  return (
    <div className="filter-box">
      <div className="filter-box-header">
        <h3 className="filter-box-title">Location</h3>
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
          {newData && newData.some((item) => item.location === "Bandung") ? (
            <TickLinear
              className="active-tick"
              onClick={() => {
                addNewFilter("location", "Bandung");
              }}
            />
          ) : (
            <TickSquare
              onClick={() => {
                addNewFilter("location", "Bandung");
              }}
            />
          )}
          <p className="check-box-name">Bandung</p>
        </div>
        <div className="filter-check-box">
          {newData && newData.some((item) => item.location === "Jakarat") ? (
            <TickLinear
              className="active-tick"
              onClick={() => {
                addNewFilter("location", "Jakarat");
              }}
            />
          ) : (
            <TickSquare
              onClick={() => {
                addNewFilter("location", "Jakarat");
              }}
            />
          )}
          <p className="check-box-name">Jakarta</p>
        </div>
        <div className="filter-check-box">
          {newData && newData.some((item) => item.location === "Medan") ? (
            <TickLinear
              className="active-tick"
              onClick={() => {
                addNewFilter("location", "Medan");
              }}
            />
          ) : (
            <TickSquare
              onClick={() => {
                addNewFilter("location", "Medan");
              }}
            />
          )}
          <p className="check-box-name">Medan</p>
        </div>
        <div className="filter-check-box">
          {newData && newData.some((item) => item.location === "Surabay") ? (
            <TickLinear
              className="active-tick"
              onClick={() => {
                addNewFilter("location", "Surabay");
              }}
            />
          ) : (
            <TickSquare
              onClick={() => {
                addNewFilter("location", "Surabay");
              }}
            />
          )}
          <p className="check-box-name">Surabaya</p>
        </div>
        <div className="filter-check-box">
          {newData && newData.some((item) => item.location === "Jogja") ? (
            <TickLinear
              className="active-tick"
              onClick={() => {
                addNewFilter("location", "Jogja");
              }}
            />
          ) : (
            <TickSquare
              onClick={() => {
                addNewFilter("location", "Jogja");
              }}
            />
          )}
          <p className="check-box-name">Jogja</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
