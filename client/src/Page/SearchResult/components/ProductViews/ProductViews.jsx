import React, { useState, useEffect } from "react";
import "./ProductViews.scss";
import ProductCard from "./ProductCard/ProductCard";
import { instance } from "../../../../utils/api";
import { ReactComponent as ArrowIcon } from "../../../../assets/icon/pagination-icon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductViews = ({ layout, setProductsCount }) => {
  const data = useSelector((state) => state?.searchProductSlice?.data);
  console.log(data);
  const { category } = useParams();
  const [newProducts, setNewProdcuts] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    let filters = "";
    if (category) {
      if (
        category === "Electronics" ||
        category === "Fashion" ||
        category === "Action Figure" ||
        category === "Accessory" ||
        category === "Book" ||
        category === "Gaming"
      ) {
        filters += `&filters[categories][title][$eq]=${category}`;
      } else {
        filters += `&filters[title][$contains]=${category}`;
      }
      console.log(category);
      console.log(filters);
      if (data[0]) {
        console.log(data[0]);
        data.map((obj) => {
          let key = Object.keys(obj);
          let value = Object.values(obj);
          if (key == "raiting") {
            filters += `&filters[${key}][$gte]=${4}`;
          } else if (key == "minPrice") {
            filters += `&filters[price][$gte]=${value}`;
          } else if (key == "maxPrice") {
            filters += `&filters[price][$lte]=${value}`;
          } else if (key == "categories") {
            filters += `&filters[categories][title][$eq]=${value}`;
          } else {
            filters += `&filters[${key}][$eq]=${value}`;
          }
          console.log("category : ", filters);
        });
      }
      const fetchSearchResult = async () => {
        const res = await instance.get(
          `/products?populate=*${filters}&pagination[page]=${pageNumber}&pagination[pageSize]=12`
        );
        setNewProdcuts(res?.data?.data);
        setProductsCount(res?.data?.meta?.pagination?.total);
        setPageCount(res?.data?.meta?.pagination?.pageCount);
      };
      fetchSearchResult();
    } else if (data[0]) {
      let filters = "";
      data.map((obj) => {
        let key = Object.keys(obj);
        let value = Object.values(obj);
        if (key == "raiting") {
          filters += `&filters[${key}][$gte]=${4}`;
        } else if (key == "minPrice") {
          filters += `&filters[price][$gte]=${value}`;
        } else if (key == "maxPrice") {
          filters += `&filters[price][$lte]=${value}`;
        } else if (key == "categories") {
          filters += `&filters[categories][title][$eq]=${value}`;
        } else {
          filters += `&filters[${key}][$eq]=${value}`;
        }
      });
      const fetchSearchResult = async () => {
        const res = await instance.get(
          `/products?populate=*${filters}&pagination[page]=${pageNumber}&pagination[pageSize]=12`
        );
        setNewProdcuts(res?.data?.data);
        setProductsCount(res?.data?.meta?.pagination?.total);
        setPageCount(res?.data?.meta?.pagination?.pageCount);
      };
      fetchSearchResult();
    } else {
      const fetchSearchResult = async () => {
        const res = await instance.get(
          `/products?populate=*&pagination[page]=${pageNumber}&pagination[pageSize]=12`
        );
        setNewProdcuts(res?.data?.data);
        setProductsCount(res?.data?.meta?.pagination?.total);
        setPageCount(res?.data?.meta?.pagination?.pageCount);
      };
      fetchSearchResult();
    }
  }, [data, pageNumber, category]);

  const pageNumbers = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  const handleNewPage = (value) => {
    setPageNumber(value);
    window.scrollTo(0,0);
  };
  const handlePrevBtn = () => {
    setPageNumber(pageNumber - 1);
    window.scrollTo(0,0);
  };
  const handleNextBtn = () => {
    setPageNumber(pageNumber + 1);
    window.scrollTo(0,0);
  };

  return (
    <div className="product-views">
      <div className="products-container">
        {newProducts &&
          newProducts.map((product, index) => {
            return <ProductCard key={index} layout={layout} product={product} />;
          })}
      </div>
      <nav className="pagination">
        {pageNumber > 1 ? (
          <button className="pagination-btn prev-btn" onClick={handlePrevBtn}>
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
                className={`pagination-btn ${
                  number === pageNumber ? "active-btn" : ""
                }`}
              >
                {number}
              </button>
            );
          })}
        {pageNumber < pageCount ? (
          <button className="pagination-btn next-btn" onClick={handleNextBtn}>
            <ArrowIcon className="next-icon" />
          </button>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default ProductViews;
