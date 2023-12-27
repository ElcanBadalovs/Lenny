import React, { useState } from "react";
import "./forgotProfile.scss";
import Email from "./components/email/email";
import Reset from "./components/reset/reset";
import { userData } from "../helpers";
import { useDispatch } from "react-redux";
import { addLog } from "../../redux/logSlice";

const ForgotProfile = ({newLog}) => {
  const [section, setSection] = useState(false);
  const dispatch = useDispatch();
  const handleSection = ( value) => {
    dispatch(addLog({log: value}))
  }
  return (
    <div className={`forgot-profile ${newLog === 'reset' ? 'active-reset' : ''}`}>
      <h1 className="forgot-profile-title">Forgot & Reset Password</h1>
      <div className="forgot-profile-form">
        {section ? <Reset /> : <Email setSection={setSection} />}
      </div>
      <button className="close-btn" onClick={() => handleSection('')}>close</button>
    </div>
  );
};

export default ForgotProfile;
