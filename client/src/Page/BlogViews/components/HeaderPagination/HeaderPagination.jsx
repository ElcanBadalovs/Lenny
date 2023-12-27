import React from "react";
import "./HeaderPagination.scss";
import { ReactComponent as ArrowIcon } from "../../../../assets/icon/arrow-down.svg";
import { Link } from "react-router-dom";

const HeaderPagination = () => {
  return (
    <div className="header-pagination">
      <Link to={`/`} className="page-name">
        Home
      </Link>
      <ArrowIcon className="arrow-icon" />
      <Link to={`/article`} className="page-name">
        Article
      </Link>
      <ArrowIcon className="arrow-icon" />
      <Link to={`/`} className="page-name">
        Company News
      </Link>
      <ArrowIcon className="arrow-icon" />
      <p className="page-name">Detail article</p>
    </div>
  );
};

export default HeaderPagination;
