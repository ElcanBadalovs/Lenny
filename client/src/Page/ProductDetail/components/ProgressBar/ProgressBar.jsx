import React from "react";
import "./ProgressBar.scss";
import { ReactComponent as StarIcon } from "../../../../assets/icon/star.svg";

const ProgressBar = () => {
  return (
    <div className="progress-bars">
      <div className="progress-bar">
        <div className="progress-bar-box">
          <p className="progress-bar-number">5.0</p>
          <StarIcon className="star-icon" />
        </div>
        <progress value={84} max={100} className="line-progress" />
        <p className="progress-bar-number like-number">2823</p>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-box">
          <p className="progress-bar-number">4.0</p>
          <StarIcon className="star-icon" />
        </div>
        <progress value={34} max={100} className="line-progress" />
        <p className="progress-bar-number like-number">38</p>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-box">
          <p className="progress-bar-number">3.0</p>
          <StarIcon className="star-icon" />
        </div>
        <progress value={14} max={100} className="line-progress" />
        <p className="progress-bar-number like-number">4</p>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-box">
          <p className="progress-bar-number">2.0</p>
          <StarIcon className="star-icon" />
        </div>
        <progress value={0} max={100} className="line-progress" />
        <p className="progress-bar-number like-number">0</p>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-box">
          <p className="progress-bar-number">1.0</p>
          <StarIcon className="star-icon" />
        </div>
        <progress value={0} max={100} className="line-progress" />
        <p className="progress-bar-number like-number">0</p>
      </div>
    </div>
  );
};

export default ProgressBar;
