import React, { useEffect, useState } from "react";
import "./PaymentAmount.scss";
import { useSelector } from "react-redux";
import { ReactComponent as DiscountShape } from "../../../../assets/icon/discount-shape.svg";
import { ReactComponent as ArrowIcon } from "../../../../assets/icon/arrow-down.svg";
import { Link } from "react-router-dom";

const PaymentAmount = ({ buyProduct }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const amountSlice = useSelector((state) => state.amountSlice);
  console.log(amountSlice.products);
  useEffect(() => {
    let price = 0;
    let discount = 0;
    if (Object.keys(amountSlice.products).length !== 0) {
      Object.keys(amountSlice.products).map((key) => {
        price +=
          amountSlice.products[key].price * amountSlice.products[key].count;
        discount -=
          amountSlice.products[key].discount * amountSlice.products[key].count;
        setTotalDiscount(discount);
        setTaxPrice(46);
        setTotalPrice(price);
      });
    } else {
      setTotalDiscount(0);
      setTaxPrice(0);
      setTotalPrice(0);
    }
  }, [amountSlice]);

  return (
    <div className="payment-amount">
      <h1 className="amount-title">Product Summary</h1>
      <div className="products-list">
        {Object.keys(amountSlice.products).length === 0 ? (
          <p>No Product Selected</p>
        ) : (
          Object.keys(amountSlice).map((companyName) => (
            <>
              {Object.keys(amountSlice[companyName]).map((product) => (
                <div key={product} className="product-text">
                  <span className="product-info">{product}</span>
                  <span className="product-info">
                    ${amountSlice[companyName][product].price}
                  </span>
                </div>
              ))}
            </>
          ))
        )}
      </div>
      <div className="amount-line"></div>
      <div className="calculate-content">
        <div className="calculate-box">
          <span className="calculate-text">Total Price</span>
          <span className="calculate-text">${totalPrice}</span>
        </div>
        <div className="calculate-box">
          <span className="calculate-text">Total Price (Discount)</span>
          <span className="calculate-text">${totalDiscount}</span>
        </div>
        <div className="calculate-box">
          <span className="calculate-text">Tax & Fee</span>
          <span className="calculate-text">$46</span>
        </div>
      </div>
      <div className="amount-line"></div>
      <div className="result">
        <span className="result-text">Total Price</span>
        <span className="result-text">
          {totalPrice - totalDiscount + taxPrice}
        </span>
      </div>
      <div className="add-promo-code">
        <div className="promo-box">
          <DiscountShape />
          <div className="promo-text">
            <h3 className="promo-header">Use a Promo</h3>
            <span className="promo-description">
              Choose product to use promo
            </span>
          </div>
        </div>
        <ArrowIcon className="promo-arrow" />
      </div>
      {buyProduct ? (
        <Link to={"/payment-succesfull"}>
          <button className="checkout-btn">Checkout</button>
        </Link>
      ) : (
        <button className="checkout-btn">Checkout</button>
      )}
    </div>
  );
};

export default PaymentAmount;
