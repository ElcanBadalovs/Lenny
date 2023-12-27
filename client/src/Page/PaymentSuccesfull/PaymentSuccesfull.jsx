import React, { useEffect } from "react";
import "./PaymentSuccesfull.scss";
import { ReactComponent as TickCircle } from "../../assets/icon/tick-circle.svg";
import { Link } from "react-router-dom";
const PaymentSuccesfull = () => {
  useEffect(() => {
    window.scrollTo(0,0);
    document.title = 'Succesfull Payment';
  }, [])
  return (
    <div className="payment-succesfull">
      <TickCircle className="tick-circle" />
      <h1 className="payment-succesfull-text">Your Payment is Succesfull</h1>
      <p className="payment-succesfull-desc">
        Your payment will be proceed in 30 mins. If any problem please chat to
        customer service. Detail information will included below.
      </p>
      <div className="payment-succesfull-btns">
        <Link to={"/"} className="btn-home-link">
          <button className="btn-home">Back to Home</button>
        </Link>
        <button className="btn-detail">Check Detail</button>
      </div>
    </div>
  );
};

export default PaymentSuccesfull;
