import React, { useState } from "react";
import "./Register.scss";
import { ReactComponent as Xmark } from '../../assets/icon/xmark.svg'
import { ReactComponent as FacebookIcon } from "../../assets/icon/Facebook.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addLog } from "../../redux/logSlice";

let initialUser = { email: "", password: "", username: "" };

const Register = ({newLog}) => {
  const [user, setUser] = useState(initialUser);
  const handleUserChange= ({target}) => {
    const {name, value} = target;
    setUser((currentUser) => ({
        ...currentUser, [name] : value,
    }));
  };
  const dispatch = useDispatch();
  const handleSection = ( value) => {
    dispatch(addLog({log: value}))
  }
  const signUp = async () => {
    try{
        const url = `${import.meta.env.VITE_BASE_URL}/api/auth/local/register`;
        if(user.username && user.email && user.password){
            const res = await axios.post(url, user);
            if(!!res){
                setUser(initialUser);
                handleSection("successfully")
                console.log('register in successfully!')
            }
        }else{
          if(!user.username){
            console.log('username yoxdu')
          }else if(user.email){
            console.log('email yoxdu')
          }else{
            console.log('parol yoxdu')
          }
        }
    }catch(error){
        console.log(error.message)
    }
  }

  return (
    <div className={`register-container ${newLog === 'register' ? 'active-register' : '' }`}>
      <div className="register">
        <div className="register-header-box">
        <h1 className="register-title">Sign Up</h1>
        <Xmark className='xmark' onClick={() => handleSection('')} />
        </div>
        <form className="form" onSubmit={(e) => {
            e.preventDefault()
            signUp()
        }}>
          <p className="form-title">Name</p>
          <input
            className="form-input"
            type="text"
            name="username"
            value={user.username}
            placeholder="Enter your name"
            onChange={handleUserChange}
          />
          <p className="form-title">Phone Number or Email</p>
          <input
            className="form-input"
            type="text"
            name="email"
            value={user.email}
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
          <span className="trouble-btn" onClick={() => handleSection("login")}>Sign In</span>
          <button className="form-send-btn">Sign Up</button>
          <div className="register-box">
            <div className="register-line"></div>
            <p className="register-box-text">Or using other method</p>
            <div className="register-line"></div>
          </div>
          <button className="facebook-btn">
            <FacebookIcon /> Sign In with Facebook
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
