import React, { useEffect, useState } from "react";
import "./SearchResult.scss";
import { useParams } from "react-router-dom";
import { ReactComponent as FilterIcon } from "../../assets/icon/filter.svg";
import { ReactComponent as Grid } from "../../assets/icon/grid.svg";
import { ReactComponent as Menu } from "../../assets/icon/menu.svg";
import SearchHeaderPagination from "./components/SearchHeaderPagination/SearchHeaderPagination";
import Filter from "./components/Filter/Filter";
import ProductViews from "./components/ProductViews/ProductViews";
const SearchResult = () => {
  const [layout, setLayout] = useState(false);
  const [productsCount, setProductsCount] = useState(0)
  const [filterActivate, setFilterActivate] = useState(false);
  const handleFilterActivate = () => {
    if (!filterActivate) {
      setFilterActivate(true);
    } else {
      setFilterActivate(false);
    }
  };
  const changeLayout = () => {
    setLayout(!layout)
  }
  const { category } = useParams();
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Search result";
    console.log(productsCount)
  }, [productsCount])
  return (
    <div className="search-products">
      <SearchHeaderPagination />
      <div className="search-products-heading">
        <div className="title-desc">
          <h1 className="heading-title">{category ? `Showing product for “${category}”` : 'All products shown'}</h1>
          <p className="heading-desc">
            Showing 1 - {productsCount && productsCount} Products
          </p>
        </div>
        <div className="search-products-heading-btns">
          <p className="heading-btn-desc">Sort By:</p>
          <select className="heading-btn-select">
            <option>Relevant Product</option>
          </select>
          <div className="heading-btns">
            <div
              className={`heading-btn filter ${
                filterActivate ? "active-filter-btn" : ""
              }`}
              onClick={handleFilterActivate}
            >
              <FilterIcon className="heading-btn-icon" />
            </div>
            <div className="heading-line"></div>
            <div className={`heading-btn grid ${!layout ? "active-grid" : ''}`} onClick={changeLayout}>
              <Grid className="heading-btn-icon" />
            </div>
            <div className={`heading-btn block  ${layout ? "active-block" : ''}`} onClick={changeLayout}>
              <Menu className="heading-btn-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="search-container">
        <Filter activate={filterActivate} />
        <ProductViews layout={layout} setProductsCount={setProductsCount} />
      </div>
    </div>
  );
};

export default SearchResult;
