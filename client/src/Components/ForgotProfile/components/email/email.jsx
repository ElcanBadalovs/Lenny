import React, { useState } from "react";
import axios from "axios";
import './email.scss'
const Email = ({ setSection }) => {
  const [email, setEmail] = useState("");
  const handleNext = (value) => {
    axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/forgot-password`, {
        email: value, 
      })
      .then((response) => {
        console.log("Your user received an email");
        setSection(true)
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div className="email">
      <h2 className="email-title">Email</h2>
      <input
        className="email-input"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="next-btn" onClick={() => handleNext(email)}>
        Next
      </button>
    </div>
  );
};

export default Email;
