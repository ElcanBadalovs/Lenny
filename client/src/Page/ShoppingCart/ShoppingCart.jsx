import React, { useState, useEffect } from "react";
import "./ShoppingCart.scss";
import ShoppingLists from "./components/ShoppingLists/ShoppingLists";
import ShoppingAmount from "./components/ShoppingAmount/ShoppingAmount";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";
import Address from "./components/Address/Address";
import { instance } from "../../utils/api";
import { userData } from "../../Components/helpers";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLog } from "../../redux/logSlice";

const ShoppingChart = () => {
  const [products, setProducts] = useState(null);
  const [checkout, setCheckout] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shopping Card";
    const fetchProducts = async () => {
      const res = await instance.get(`/products?populate=*`);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const { jwt } = userData();

  const dispatch = useDispatch();
  const openLogin = (value) => {
    dispatch(addLog({ log: value }));
  };
  
  if (!jwt) {
    openLogin('login')
    return <Navigate to={"/"} />;
  }
  return (
    <div className="shopping-chart">
      <div className="background-layout"></div>
      <div className="shopping-chart-header">
        <div className="header-text-box">
          <h1 className="shopping-chart-header-title">Shopping Chart</h1>
          <p className="shopping-chart-header-text">
            Showing your choices product
          </p>
        </div>
        <div className="search-box">
          <p className="search-box-text">Sort By:</p>
          <select className="select">
            <option className="option">Latest Added</option>
          </select>
        </div>
      </div>
      <div className="shopping-content">
        <div className="shopping-box">
        <Address checkout={checkout}/>
        <ShoppingLists />
        </div>
        <div className="active-desctop">
          <ShoppingAmount checkout={checkout} setCheckout={setCheckout}/>
        </div>
      </div>
      <div className={`related ${checkout ? 'deactive-related' : ''}`}>
        <RelatedProducts products={products?.data} />
      </div>
      <div className="active-mobile">
        <ShoppingAmount checkout={checkout} setCheckout={setCheckout}/>
      </div>
    </div>
  );
};

export default ShoppingChart;
