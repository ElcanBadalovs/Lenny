import React, { useState } from "react";
import "./Profile.scss";
import { ReactComponent as Yelena } from "../../assets/icon/yelena.svg";
import { ReactComponent as Xmark } from "../../assets/icon/xmark.svg";
import { ReactComponent as Setting } from "../../assets/icon/setting.svg";
import { ReactComponent as Favorite } from "../../assets/icon/favorite.svg";
import { ReactComponent as Receipt } from "../../assets/icon/receipt.svg";
import { ReactComponent as Logout } from '../../assets/icon/logout.svg';
import { ReactComponent as Moneys } from '../../assets/icon/moneys.svg';
import { ReactComponent as Coin } from '../../assets/icon/coin.svg';
import { useDispatch } from "react-redux";
import { addLog } from "../../redux/logSlice";
import { Link } from "react-router-dom";
import { userData } from "../helpers";


const Profile = ({ newLog }) => {
  const dispatch = useDispatch();
  const handleSection = (value) => {
    dispatch(addLog({ log: "" }));
  };
  const { user } = userData();

  const handleLocal = () => {
    localStorage.removeItem('user');
  }

  return (
    <div className={`profile ${newLog === "profile" ? "active-profil" : ""}`}>
      <div className="profile-info">
        <Yelena />
        <div className="profile-text">
          <h1 className="user-name">{user ? user.username : ''}</h1>
          <p className="profile-desc">Platinum Member</p>
        </div>
      </div>
      <div className="profile-line"></div>
      <div className="wallet">
        <h1 className="wallet-header">Wallet</h1>
        <div className="wallet-text">
          <div className="wallet-text-box">
            <p className="wallet-text-box-title"><Moneys /> Lenny Balance</p>
            <p className="prfile-amount">$928,28</p>
          </div>
        </div>
        <div className="wallet-text">
          <div className="wallet-text-box">
            <p className="wallet-text-box-title"><Coin /> Lenny Coins</p>
            <p className="profile-amount">$928,28</p>
          </div>
        </div>
      </div>
      <div className="profile-line"></div>
      <div className="profile-menu">
        <h1 className="profile-menu-header">Menu</h1>
        <div className="menu-box">
          <p className="menu-text"><Receipt /> Purchase</p>
          <p className="menu-text"><Favorite  className="icon" /> Wishlist</p>
          <p className="menu-text"><Setting /> Settings</p>
        </div>
      </div>
      <div className="profile-line"></div>
      <p className="sign-out" onClick={() => {
        handleSection()
      handleLocal()}}><Logout /> Sign Out</p>
    </div>
  );
};

export default Profile;
