import React, { useState } from "react";
import "./Filter.scss";
import BestFilter from "./BestFilter/BestFilter";
import Location from "./Location/Location";
import Categorie from "./Categorie/Categorie";
import PriceRange from "./PriceRange/PriceRange";
import { useDispatch } from "react-redux";
import { addNewSearchFilter } from "../../../../redux/searchProductSlice";
const Filter = ({ activate }) => {
  const dispatch = useDispatch();
  const addNewFilter = (key, value) => {
    dispatch(addNewSearchFilter({ stateName: key, data: value }));
  };
  return (
    <div className={`filter ${activate ? "active-filter" : ""}`}>
      <h2 className="filter-title">Filter Option</h2>
      <div className="filter-line"></div>
      <BestFilter addNewFilter={addNewFilter} />
      <div className="filter-line"></div>
      <Location addNewFilter={addNewFilter} />
      <div className="filter-line"></div>
      <Categorie addNewFilter={addNewFilter} />
      <div className="filter-line"></div>
      <PriceRange addNewFilter={addNewFilter} />
    </div>
  );
};

export default Filter;
