import React, { useState, useEffect } from "react";
import "./ReviewFilterRaiting.scss";
import { ReactComponent as ArrowIcon } from "../../../../../assets/icon/arrow-down.svg";
import { ReactComponent as TickSquare } from "../../../../../assets/icon/tick-linear.svg";
import { ReactComponent as Star } from "../../../../../assets/icon/star.svg";
import { useSelector } from "react-redux";

const ReviewFilterRaiting = ({ addNewFilter }) => {
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
        <h3 className="review-filter-box-title">Best Filter</h3>
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
              newData && newData.some((item) => item.raiting === 5)
                ? "active-tick"
                : ""
            }
            onClick={() => addNewFilter("raiting", 5)}
          />
          <p className="review-filter-check-box-name">
            <Star /> 5
          </p>
        </div>
        <div className="review-filter-check-box">
          <TickSquare
            className={
              newData && newData.some((item) => item.raiting === 4)
                ? "active-tick"
                : ""
            }
            onClick={() => addNewFilter("raiting", 4)}
          />
          <p className="review-filter-check-box-name">
            <Star /> 4
          </p>
        </div>
        <div className="review-filter-check-box">
          <TickSquare
            className={
              newData && newData.some((item) => item.raiting === 3)
                ? "active-tick"
                : ""
            }
            onClick={() => addNewFilter("raiting", 3)}
          />
          <p className="review-filter-check-box-name">
            <Star /> 3
          </p>
        </div>
        <div className="review-filter-check-box">
          <TickSquare
            className={
              newData && newData.some((item) => item.raiting === 2)
                ? "active-tick"
                : ""
            }
            onClick={() => addNewFilter("raiting", 2)}
          />
          <p className="review-filter-check-box-name">
            <Star /> 2
          </p>
        </div>
        <div className="review-filter-check-box">
          <TickSquare
            className={
              newData && newData.some((item) => item.raiting === 1)
                ? "active-tick"
                : ""
            }
            onClick={() => addNewFilter("raiting", 1)}
          />
          <p className="review-filter-check-box-name">
            <Star /> 1
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilterRaiting;
