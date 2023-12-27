import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newApiCall } from "../redux/productSlice";
import { getCategories } from "../api/categories";


const dispatch = useDispatch();

React.useEffect(() => {
  async function getAllCategories() {
    const data = await getCategories();
    dispatch(newApiCall({products: data}));
  }
  getAllCategories();
}, []);
