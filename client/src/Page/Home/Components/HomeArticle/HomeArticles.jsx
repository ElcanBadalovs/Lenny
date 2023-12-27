import React, { useEffect, useState } from "react";
import "./HomeArticles.scss";
import HomeBlog from "./HomeBlog/HomeBlog";
import { NavLink } from "react-router-dom";
import { paths } from "../../../../utils/constant/index";

const HomeArticle = (blogs) => {
  const [newBlogs, setNewBlogs] = useState(null);
  useEffect(() => {
    setNewBlogs(blogs?.blogs);
  }, [blogs]);
  return (
    <div className="home-article">
      <div className="home-article-header">
        <h2 className="home-article-header-text">Lenny’s Article</h2>
        <button className="home-article-header-btn">
          {" "}
          <NavLink className="home-article-link" to={paths.ARTICLE}>
            View Detail
          </NavLink>
        </button>
      </div>
      <div className="blogs-container">
        {newBlogs &&
          newBlogs.map((blog, index) => {
            if (index < 3) {
              return (
                <HomeBlog key={index} id={blog.id} blog={blog?.attributes} />
              );
            }
          })}
      </div>
    </div>
  );
};

export default HomeArticle;
