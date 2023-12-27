import React from "react";
import "./DetailHeaderPagination.scss";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../../../assets/icon/arrow-down.svg";

const DetailHeaderPagination = ({ productName }) => {
  const { category } = useParams();
  return (
    <div>
      <div className="detail-header-pagination">
        <Link to={`/`} className="page-name">
          Home
        </Link>
        {category ? (
          <>
            <ArrowIcon className="arrow-icon" />
            <Link to={`/searchresult/${category}`} className="page-name">
              {category}
            </Link>
          </>
        ) : (
          <></>
        )}
        <ArrowIcon className="arrow-icon" />
        <p className="page-name">{productName}</p>
      </div>
    </div>
  );
};

export default DetailHeaderPagination;
