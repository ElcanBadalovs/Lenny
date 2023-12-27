import React, { useState, useEffect } from "react";
import "./Category.scss";
import { Link } from "react-router-dom";
import { addNewSearchFilter } from "../../../../redux/searchProductSlice";
import { useDispatch } from "react-redux";
const Category = ({ category }) => {
  const [newCategory, setNewCategory] = useState(null);

  useEffect(() => {
    setNewCategory(category);
  }, [category]);

  const dispatch = useDispatch();
  const addNewFilter = (key, value) => {
    dispatch(addNewSearchFilter({ stateName: key, data: value }));
  };

  return (
    <div className="category-box">
      {newCategory &&
        newCategory.map((item, index) => {
          return (
            <Link
              to={`/searchresult/${ item?.attributes?.title}`}
              key={index}
              onClick={() => addNewFilter('categories', item?.attributes?.title)}
            >
              <div className="category-product-box">
                <img
                  src={`${import.meta.env.VITE_UPLOAD_IMG}${
                    item?.attributes?.img?.data?.attributes.url
                  }`}
                />
                <h3>{item?.attributes?.title}</h3>
                <p>{item?.attributes?.product} products</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Category;
