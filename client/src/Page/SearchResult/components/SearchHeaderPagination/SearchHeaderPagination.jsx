import React from "react";
import "./SearchHeaderPagination.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../../../assets/icon/arrow-down.svg";
const SearchHeaderPagination = () => {
  const { category } = useParams();
  return (
    <div className="search-header-pagination">
      <Link to={`/`} className="page-name">
        Home
      </Link>
      {category ? (
        <>
          <ArrowIcon className="arrow-icon" />
          <p className="page-name">{category}</p>
        </>
      ) : (
        <>
          <ArrowIcon className="arrow-icon" />
          <p className="page-name">Products</p>
        </>
      )}
    </div>
  );
};

export default SearchHeaderPagination;
