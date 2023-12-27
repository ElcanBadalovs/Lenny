import React, { useEffect, useState } from "react";
import "./Payment.scss";
import PaymentAmount from "./components/PaymentAmount/PaymentAmount";
import AddCard from "./components/AddCard/AddCard";
import PaymentMetod from "./components/PaymentMetod/PaymentMetod";
import { userData } from "../../Components/helpers";

let initialPayment = { cardName: "", cardNumber: "", date: "", cvv: "" };

const Payment = () => {
  const { jwt } = userData();
  if (!jwt) {
    openLogin("login");
    return <Navigate to={"/"} />;
  }

  const [buyProduct, setBuyProduct] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(initialPayment);
  const handlePaymentChange = ({ target }) => {
    const { name, value } = target;
    setPaymentInfo((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Payment";
  }, []);

  return (
    <div className="payment">
    <div className="background-layout"></div>
      <div className="payment-container">
        <PaymentMetod
          paymentInfo={paymentInfo}
          handlePaymentChange={handlePaymentChange}
        />
        <AddCard
          paymentInfo={paymentInfo}
          handlePaymentChange={handlePaymentChange}
          setBuyProduct={setBuyProduct}
        />
      </div>
      <PaymentAmount buyProduct={buyProduct} />
    </div>
  );
};

export default Payment;
