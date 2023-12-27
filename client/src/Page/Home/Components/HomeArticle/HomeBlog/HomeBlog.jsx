import React from "react";
import "./HomeBlog.scss";
import { Link } from "react-router-dom";

const HomeCard = ({ id, blog }) => {
  const URL = `${import.meta.env.VITE_UPLOAD_IMG}${
    blog?.thumbnail?.data[0].attributes?.url
  }`;
  return (
    <div className="blog-card">
      <Link to={`/blog/${id}`}>
        <img src={URL} className="blog-thumbnail" />
        <p className="blog-date">{blog?.date}</p>
        <h1 className="blog-title">{blog?.title}</h1>
        <p className="blog-description">{blog?.description}</p>
      </Link>
    </div>
  );
};

export default HomeCard;
