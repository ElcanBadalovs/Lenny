import React, { useState, useEffect } from "react";
import "./DropDown.scss";
import { ReactComponent as ArrowIcon } from "../../../../assets/icon/arrow-down.svg";
import SubCategory from "./SubCategory/SubCategory";
import { userData } from "../../../helpers";


const DropDownMenu = ({ categories, openLogin, active }) => {
  const [newCategory, setNewCategory] = useState(null);
  const [activeDropDown, setActiveDropDown] = useState([]);
  const { jwt } = userData();
  useEffect(() => {
    setNewCategory(categories);
  }, [categories]);

  const handleDropDown = (index) => {
    const newActiveItems = [...activeDropDown];
    if (newActiveItems.includes(index)) {
      newActiveItems.splice(newActiveItems.indexOf(index), 1);
    } else {
      newActiveItems.push(index);
    }
    setActiveDropDown(newActiveItems);
  };

  return (
    <div className={`drop-down-menu ${active ? "drop-down-active" : ""}`}>
      {newCategory &&
        newCategory.map((item, index) => {
          return (
            <div key={index}>
              <p
                className="category"
                key={index}
                onClick={() => handleDropDown(index)}
              >
                {item.attributes.title}{" "}
                {item?.attributes?.sub_categories?.data.length > 0 ? (
                  <ArrowIcon
                    className={`arrow ${
                      activeDropDown.includes(index) ? "active-arrow" : ""
                    }`}
                  />
                ) : (
                  ""
                )}
              </p>
              {item?.attributes?.sub_categories?.data.length > 0 ? (
                <SubCategory
                  activeSubCategory={activeDropDown.includes(index)}
                  subCategory={item?.attributes?.sub_categories?.data}
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
      {!jwt ? (
        <>
          <div className="sign sign-up" onClick={() => openLogin("register")}>
            Sign Up
          </div>
          <div className="sign sign-in" onClick={() => openLogin("login")}>
            Sign In
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DropDownMenu;
