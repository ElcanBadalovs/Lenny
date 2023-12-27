import React from "react";
import "./Successfully.scss";
import { ReactComponent as TickCircle } from "../../assets/icon/tick-circle.svg";
import { useDispatch } from "react-redux";
import { addLog } from "../../redux/logSlice";

const Successfully = ({ newLog }) => {
  const dispatch = useDispatch();
  const handleLog = (value) => {
    dispatch(addLog({ log: value }));
  };
  return (
    <div
      className={`successfully-container ${
        newLog === "successfully" ? "active-successfully" : ""
      }`}
    >
      <div className="successfully">
        <TickCircle className="successfully-icon" />
        <div className="successfully-header-box">
          <h1 className="successfully-title">Create Account Successfull!</h1>
        </div>
        <p className="successfully-text">
          Lorem ipsum dolor sit amet consectetur. Velit ut ipsum tortor diam nec
          blandit ultrices et magna nisl eu.
        </p>
        <button className="sign-in-btn" onClick={() => handleLog("login")}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Successfully;
