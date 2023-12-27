import React, { useState } from "react";
import "./Login.scss";
import { ReactComponent as Xmark } from '../../assets/icon/xmark.svg'
import { ReactComponent as FacebookIcon } from "../../assets/icon/Facebook.svg";
import axios from "axios";
import { storeUser } from "../helpers";
import { useDispatch } from "react-redux";
import { addLog } from "../../redux/logSlice";

const initialUser = { password: "", identifier: "" };

const Login = ({ newLog }) => {
  const [user, setUser] = useState(initialUser);
  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const handleLog = (value) =>{
    dispatch(addLog({ log: value }));
  }
 
  const handleLogin = async () => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/api/auth/local`;
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          setUser(initialUser);
          // Navigate("/login")
          handleLog()
          console.log("logged in successfully!");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div
      className={`login-container ${newLog === "login" ? "active-login" : ""}`}
    >
      <div className="login">
        <div className="login-header-box">
          <h1 className="login-title">Sign In</h1>
          <Xmark className="xmark" onClick={() => handleLog()} />
        </div>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <p className="form-title">Phone Number or Email</p>
          <input
            className="form-input"
            type="text"
            name="identifier"
            value={user.identifier}
            placeholder="Enter your phone number or email"
            onChange={handleUserChange}
          />
          <p className="form-title">Password</p>
          <input
            className="form-input"
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
            onChange={handleUserChange}
          />
          <span className="trouble-btn" onClick={() => handleLog("register")}>Sign Up</span>
          <button className="form-send-btn" onClick={() => handleLog("")}>Sign In</button>
          <div className="login-box">
            <div className="login-line"></div>
            <p className="login-box-text">Or using other method</p>
            <div className="login-line"></div>
          </div>
          <button className="facebook-btn">
            <FacebookIcon /> Sign In with Facebook
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
