import React from "react";
import "./ReviewFilter.scss";
import ReviewFilterRaiting from "./ReviewFilterRaiting/ReviewFilterRaiting";
import ReviewFilterTopics from "./ReviewFilterTopics/ReviewFilterTopics";
import { useDispatch } from "react-redux";
import { ReviewFilterAdd } from "../../../../redux/ReviewFilterSlice";

const ViewFilter = ({active}) => {
  const dispatch = useDispatch();
  const addNewFilter = (key, value) => {
    dispatch(ReviewFilterAdd({ stateName: key, data: value }));
  };
  return (
    <div className={`review-filter ${active ? "active-filter" : ""}`}>
      <h2 className="review-filter-title">Reviews Filter</h2>
      <div className="review-filter-line"></div>
      <ReviewFilterRaiting addNewFilter={addNewFilter} />
      <div className="review-filter-line"></div>
      <ReviewFilterTopics addNewFilter={addNewFilter} />
    </div>
  );
};

export default ViewFilter;
