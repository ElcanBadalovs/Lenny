import React, { useEffect, useState } from "react";
import "./ShoppingLists.scss";
import ShoppingList from './ShoppingList/ShoppingList'
import { useSelector } from "react-redux";
import { instance } from "../../../../utils/api";
import { Link } from "react-router-dom";

const ShoppingLists = () => {
  const buyProducts = useSelector((state) => state.buyProductsList);
  const [company, setCompany] = useState("");
  useEffect(() => {
    const fetchCompany = async (companyName) => {
      const res = await instance.get(
        `/companies?filters[title][$eq]=${companyName}&populate=*`
      );
      setCompany((prevCompanies) => ({
        ...prevCompanies,
        [companyName]: res.data,
      }));
    };
    Object.keys(buyProducts).forEach((key) => {
      fetchCompany(key);
    });
  }, [buyProducts]);
  return (
    <div className="shopping-lists">
      <>
        {Object.keys(buyProducts).length === 0 ? (
          <div key={"l1"} className="lists-content no-products">
            <p>No product</p>
            <Link to={"/searchresult"}>
              <button className="add-btn">add product</button>
            </Link>
          </div>
        ) : (
          Object.keys(buyProducts).map((key) => (
            <>
              <div key={key} className="lists-content">
                <div className="company">
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${
                      company[key]?.data[0]?.attributes?.logo?.data[0]
                        ?.attributes.url
                    }`}
                    className="company-img"
                  />
                  <div className="company-text">
                    <h1 className="company-name">{key}</h1>
                    <p className="company-owner">
                      {company[key]?.data[0]?.attributes?.salesperson}
                    </p>
                  </div>
                </div>

                <div className="lists-box">
                  {Object.keys(buyProducts[key]).map((childKey) => (
                    <div key={childKey}>
                      <ShoppingList
                        product={buyProducts[key][childKey]}
                        companyName={key}
                        id={childKey}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))
        )}
      </>
    </div>
  );
};

export default ShoppingLists;
