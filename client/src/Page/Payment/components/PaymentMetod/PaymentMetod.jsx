import React, { useState } from "react";
import "./PaymentMetod.scss";
import { ReactComponent as PayPal } from "../../../../assets/image/PayPal.svg";
import { ReactComponent as Payoneer } from "../../../../assets/image/Payoneer.svg";
import { ReactComponent as Stripe } from "../../../../assets/image/Stripe.svg";
import { ReactComponent as Ring } from "../../../../assets/icon/Ring.svg";
import { ReactComponent as RingBold } from "../../../../assets/icon/RingBold.svg";

const PaymentMetod = () => {
  const [activeMetod, setActiveMetod] = useState("");
  return (
    <div className="payment-metod">
      <h1 className="payment-metod-header">Payment Method</h1>
      <div className="metod">
        {activeMetod === "PayPal" ? (
          <RingBold className="ring-icon" onClick={() => setActiveMetod("")} />
        ) : (
          <Ring
            className="ring-icon"
            name="PayPal"
            onClick={() => setActiveMetod("PayPal")}
          />
        )}
        <PayPal className="metod-logo" />
        <div className="metod-text">
          <h1 className="metod-name">PayPal</h1>
          <p className="metod-desc">Central Jakarta</p>
        </div>
      </div>
      <div className="metod-line"></div>
      <div className="metod">
        {activeMetod === "Stripe" ? (
          <RingBold className="ring-icon" onClick={() => setActiveMetod("")} />
        ) : (
          <Ring
            className="ring-icon"
            onClick={() => setActiveMetod("Stripe")}
          />
        )}
        <Stripe className="metod-logo" />
        <div className="metod-text">
          <h1 className="metod-name">Stripe</h1>
          <p className="metod-desc">8329 3288 823 ****</p>
        </div>
      </div>
      <div className="metod-line"></div>
      <div className="metod">
        {activeMetod === "Payoneer" ? (
          <RingBold className="ring-icon" onClick={() => setActiveMetod("")} />
        ) : (
          <Ring
            className="ring-icon"
            onClick={() => setActiveMetod("Payoneer")}
          />
        )}
        <Payoneer className="metod-logo" />
        <div className="metod-text">
          <h1 className="metod-name">Payoneer</h1>
          <p className="metod-desc">8329 3288 823 ****</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMetod;
