import React, { useState, useEffect } from "react";
import "./Select.scss";
import { NavLink } from "react-router-dom";
const Select = ({ category }) => {
  const [newCategory, setNewCategory] = useState(null);

  useEffect(() => {
    setNewCategory(category);
  }, [category]);

  const handlePage = (value) => {
    return <NavLink to={`/searchresult/${value}`}/>
  }

  return (
    <div>
      <select className="select-input" name="All catagories" onClick={(e) => handlePage(e.target.value)}>
        <option value="all">All Categories</option>
        {newCategory &&
          newCategory.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.attributes.title}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Select;
