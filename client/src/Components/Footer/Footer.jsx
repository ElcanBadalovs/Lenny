import React from "react";
import "./Footer.scss";
import { ReactComponent as Logos } from "../../assets/icon/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <Logos />
          <p className="footer-description">
            The biggest marketplace managed by Ideologist corp, which provides
            various kinds of daily needs and hobbies.
          </p>
        </div>
        <div className="footer-box">
          <ul className="footer-btns-box">
            <li className="footer-header-text">About Lenny</li>
            <li className="footer-btns">Information</li>
            <li className="footer-btns">Store Lactor</li>
            <li className="footer-btns">Bulk Purchase</li>
            <li className="footer-btns">Alteration Services</li>
            <li className="footer-btns">Gift Delivery Service</li>
            <li className="footer-btns">Live Station</li>
          </ul>
          <ul className="footer-btns-box">
            <li className="footer-header-text">About Lenny</li>
            <li className="footer-btns">FAQ</li>
            <li className="footer-btns">Return Policy</li>
            <li className="footer-btns">Privacy Policy</li>
            <li className="footer-btns">Accessibillity</li>
            <li className="footer-btns">Contact Us</li>
          </ul>
        </div>
        <div className="footer-box">
          <ul className="footer-btns-box">
            <li className="footer-header-text">Account</li>
            <li className="footer-btns">Membership</li>
            <li className="footer-btns">Address</li>
            <li className="footer-btns">Cupons</li>
          </ul>
          <ul className="footer-btns-box">
            <li className="footer-header-text">Contact Us</li>
            <li className="footer-btns">For Lenny Consumer Complaint Services</li>
            <li className="footer-btns">(684) 555-0102 and curtis.weaver@example.com</li>
            <li className="footer-btns">Customers Complaint Service</li>
            <li className="footer-btns">Directorate Generate of the Republic of Indonesia</li>
            <li className="footer-btns">(480) 555-0103</li>
          </ul>
        </div>
      </div>
      <section className="site-owner">
        <p className="site-owner-title">COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.</p>
        <div className="site-owner-btns">
          <span className="site-owner-btn">Terms of use</span>
          <span className="site-owner-btn">Privacy Policy</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
