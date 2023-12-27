import React, { useEffect, useState } from "react";
import "./Article.scss";
import Blogs from "../../Components/blogs/Blogs";
import { instance } from "../../utils/api";
import HeaderBlog from "./HeaderBlog/HeaderBlog";
const Article = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProductDetail = async () => {
      const res = await instance.get(`/blogs?populate=*`);
      setBlogs(res.data);
    };
    fetchProductDetail();
    document.title = 'Article';
  }, []);

  
  return (
    <div className="blog">
      <div className="background-layout"></div>
      <h2 className="blog-header">The Lenny Blog</h2>
      <p className="blog-header-text">
        All things recruiting: real stories, best practices
      </p>
      <HeaderBlog blog={blogs?.data[3]?.attributes} id={4}/>
      <Blogs blogs={blogs} />
      <button className="blog-btn">Load More</button>
    </div>
  );
};

export default Article;
