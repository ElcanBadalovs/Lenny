import React, { useState } from "react";
import "./Testimonial.scss";
import { ReactComponent as StarIcon } from "../../../../../assets/icon/star.svg";
import { ReactComponent as Like } from "../../../../../assets/icon/like.svg";
import { ReactComponent as DisLike } from "../../../../../assets/icon/dislike.svg";

const Testimonial = ({ comment }) => {
  const [likeBtn, setLikeBtn] = useState(false);
  const URL = `${import.meta.env.VITE_UPLOAD_IMG}${
    comment?.image?.data[0]?.attributes?.url
  }`;
  const handleLikeBtn = (value) => {
    if (value == "like") {
      if (likeBtn != "like") {
        setLikeBtn(value);
      } else {
        setLikeBtn(false);
      }
    } else if (value == "dislike") {
      if (likeBtn != "dislike") {
        setLikeBtn(value);
      } else {
        setLikeBtn(false);
      }
    }
  };
  return (
    <div className="testimonial">
      <div className="testimonial-comment">
        <div className="stars">
          {Array.from({ length: comment.raiting }, (_, index) => (
            <StarIcon key={index} className="star" />
          ))}
        </div>
        <p className="testimonial-comment">{comment?.comment}</p>
        <span className="comment-date">{comment?.date}</span>
      </div>
      <div className="user">
        <div className="profil-info">
          <img src={URL} className="profil-image" />
          <p className="user-name">{comment?.Username}</p>
        </div>
        <div className="like-btn">
          <button
            className={`like-dislike ${likeBtn == "like" ? "active-like" : ""}`}
            value={"like"}
            onClick={(e) => handleLikeBtn(e.target.value)}
          >
            <Like className="like-dislike-icon" /> {comment?.like}
          </button>
          <button
            className={`like-dislike ${
              likeBtn == "dislike" ? "active-dislike" : ""
            }`}
            value={"dislike"}
            onClick={(e) => handleLikeBtn(e.target.value)}
          >
            <DisLike className="like-dislike-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
