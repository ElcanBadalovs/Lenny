import React from "react";
import "./SubCategory.scss";

const SubCategory = ({activeSubCategory, subCategory}) => {
  return (
  <div className={`sub-categories ${activeSubCategory ? 'activeSubCategory' : ''}`}>
  {subCategory.map((item, index) => {
    return(
        <div key={index}>
        {item?.attributes?.title}
    </div>
    )
  })}
  </div>
  )
};

export default SubCategory;
