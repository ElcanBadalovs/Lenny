import React from "react";
import "./Static.scss";

const Static = () => {
  return (
    <div className="circle-wrap">
      <div className="circle">
        <div className="mask full-1">
          <div className="fill-1"></div>
        </div>
        <div className="mask half">
          <div className="fill-1"></div>
        </div>
        <div className="inside-circle"> 4.8 </div>
      </div>
    </div>
  );
};

export default Static;
