import React, { useState, useEffect } from "react";
import "./ReviewLists.scss";
import { ReactComponent as FilterIcon } from "../../../../assets/icon/filter.svg";
import { ReactComponent as ArrowIcon } from "../../../../assets/icon/pagination-icon.svg";
import { instance } from "../../../../utils/api";
import Testimonial from "./Testimonial/Testimonial";
import { useSelector } from "react-redux";

const ReviewLists = ({active, setActive}) => {
  const data = useSelector((state) => state?.ReviewFilterSlice?.data);
  const [filterActivate, setFilterActivate] = useState(false);
  const [btnActivate, setBtnActivate] = useState("all");
  const [comments, setComments] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const handleFilterActivate = () => {
    setFilterActivate(!filterActivate);
  };
  const handleBtnActivate = (value) => {
    setBtnActivate(value);
  };

  useEffect(() => {
    if (data) {
      let filters = "";
      data.map((obj) => {
        let key = Object.keys(obj);
        let value = Object.values(obj);
        filters += `&filters[${key}][$eq]=${value}`;
        console.log(filters);
      });
      const fetchProductDetail = async () => {
        const res = await instance.get(
          `/comments?populate=*${filters}&pagination[page]=${pageNumber}&pagination[pageSize]=4`
        );
        setComments(res?.data?.data);
        setPageCount(res?.data?.meta?.pagination?.pageCount);
      };
      fetchProductDetail();
    } else {
      const fetchProductDetail = async () => {
        const res = await instance.get(
          `/comments?populate=*&pagination[page]=${pageNumber}&pagination[pageSize]=4`
        );
        setComments(res?.data?.data);
        setPageCount(res?.data?.meta?.pagination?.pageCount);
      };
      fetchProductDetail();
    }
  }, [data, pageNumber]);

  const pageNumbers = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  const handleNewPage = (value) => {
    setPageNumber(value);
  };
  const handlePrevBtn = () => {
    setPageNumber(pageNumber - 1);
  };
  const handleNextBtn = () => {
    setPageNumber(pageNumber + 1);
  };
  return (
    <div className="review-lists">
      <h1 className="review-lists-title">Review Lists</h1>
      <div className="review-tab">
        <div className="review-btns">
          <button
            value={"all"}
            className={`review-btn ${
              btnActivate == "all" ? "active-review" : ""
            }`}
            onClick={(e) => handleBtnActivate(e.target.value)}
          >
            All Reviews
          </button>
          <button
            value={"photo&video"}
            className={`review-btn ${
              btnActivate == "photo&video" ? "active-review" : ""
            }`}
            onClick={(e) => handleBtnActivate(e.target.value)}
          >
            With Photo & VIdeo
          </button>
          <button
            value={"description"}
            className={`review-btn ${
              btnActivate == "description" ? "active-review" : ""
            }`}
            onClick={(e) => handleBtnActivate(e.target.value)}
          >
            With Description
          </button>
        </div>
        <div
          className={`review-tab-filter-btn ${
            filterActivate ? "active-tab-filter-btn" : ""
          }`}
          onClick={() => {handleFilterActivate(); setActive(!active)}}
        >
          <FilterIcon className="review-btn-icon"/>
        </div>
      </div>
      <div className="testimonial-lists">
        {comments &&
          comments.map((comment, index) => {
            return <Testimonial key={index} comment={comment?.attributes} />;
          })}
      </div>
      <nav className="testimonial-pagination">
        {pageNumber > 1 ? (
          <button
            className="testimonial-pagination-btn prev-btn"
            onClick={handlePrevBtn}
          >
            <ArrowIcon className="prev-icon" />
          </button>
        ) : (
          ""
        )}
        {pageNumbers &&
          pageNumbers.map((number, index) => {
            return (
              <button
                key={index}
                onClick={(e) => {
                  handleNewPage(e.target.value);
                }}
                value={number}
                className={`testimonial-pagination-btn ${
                  number === pageNumber ? "active-btn" : ""
                }`}
              >
                {number}
              </button>
            );
          })}
        {pageNumber < pageCount ? (
          <button
            className="testimonial-pagination-btn next-btn"
            onClick={handleNextBtn}
          >
            <ArrowIcon className="next-icon" />
          </button>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default ReviewLists;
