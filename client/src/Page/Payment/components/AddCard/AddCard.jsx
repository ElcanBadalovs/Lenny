import React, { useEffect, useState } from "react";
import "./AddCard.scss";
const AddCard = ({ paymentInfo, handlePaymentChange, setBuyProduct }) => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (
      paymentInfo.cardName !== "" &&
      paymentInfo.cardNumber !== "" &&
      paymentInfo.date !== "" &&
      paymentInfo.cvv !== ""
    ) {
      setDisabled(false);
    }
  }, [paymentInfo]);
  return (
    <div className="add-cart">
      <h1 className="add-card-header">Add Debit Cart</h1>
      <div className="card-container">
        <div className="card-boxes">
          <div className="card-box">
            <h3 className="input-name">Holder Name</h3>
            <input
              type="text"
              className="card-input"
              placeholder="Enter your name"
              name="cardName"
              value={paymentInfo.cardName}
              onChange={handlePaymentChange}
            />
          </div>
          <div className="card-box">
            <h3 className="input-name">Card Number</h3>
            <input
              type="text"
              className="card-input"
              placeholder="0000 - 0000 - 0000 - 0000"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentChange}
            />
          </div>
        </div>
        <div className="card-boxes">
          <div className="card-box">
            <h3 className="input-name">Expiry Date</h3>
            <input
              type="date"
              className="card-input"
              placeholder="Select expiry date"
              name="date"
              value={paymentInfo.date}
              onChange={handlePaymentChange}
            />
          </div>
          <div className="card-box">
            <h3 className="input-name">CVV</h3>
            <input
              type="text"
              className="card-input"
              placeholder="Enter your Cvv"
              name="cvv"
              value={paymentInfo.cvv}
              onChange={handlePaymentChange}
            />
          </div>
        </div>
      </div>
      <div className="add-card-btns">
        <div className="btns-box">
          <button
            className="card-btn card-checkout"
            disabled={disabled}
            onClick={() => setBuyProduct(true)}
          >
            Checkout
          </button>
          <button className="card-btn card-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
