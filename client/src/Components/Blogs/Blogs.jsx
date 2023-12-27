import React, { useEffect, useState } from "react";
import "./blogs.scss";
import { ReactComponent as ArrowRight } from "../../assets/icon/arrow-down.svg";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  const [blogsState, setBlogsState] = useState([]);
  useEffect(() => {
    if (blogs) {
      setBlogsState(blogs?.data);
    }
  }, [blogs]);
  console.log(blogs);

  return (
    <div className="blog-container">
      {blogsState &&
        blogsState.map((blog, index) => {
          console.log(blog.id);
          if (
            blog.id !== 1 &&
            blog.id !== 2 &&
            blog.id !== 3 &&
            blog.id !== 4
          ) {
            console.log(blog);
            const URL = `${import.meta.env.VITE_UPLOAD_IMG}${
              blog?.attributes?.thumbnail?.data[0]?.attributes?.url
            }`;
            const divStyle = {
              backgroundImage: `url("${URL}")`,
            };
            return (
              <div className="blog-box" key={index}>
                <Link to={`/blog/${blog.id}`} className="link">
                  <div style={divStyle} className="blog-thumbnail"></div>
                  <div className="short-info">
                    <span className="short-info-tag">Lenny Article</span>
                    <p className="read-number">
                      {blog?.attributes?.ReadNumber}
                    </p>
                  </div>
                  <h1 className="blog-title">{blog?.attributes?.title}</h1>
                  <span className="read-more">
                    Read more <ArrowRight className="arrow-right" />
                  </span>
                </Link>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Blogs;
