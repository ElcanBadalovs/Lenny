import React, { useState, useEffect } from "react";
import "./BlogViews.scss";
import { useParams } from "react-router-dom";
import { instance } from "../../utils/api";
import Markdown from "react-markdown";
import HeaderPagination from "./components/HeaderPagination/HeaderPagination";
import RelatedArticle from "./components/RelatedArticle/RelatedArticle";

const BlogViews = () => {
  let { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlogDetail = async () => {
      const res = await instance.get(`/blogs/${id}?populate=*`);
      setBlog(res.data);
    };
    fetchBlogDetail();
  }, [id]);

  useEffect(() => {
    document.title = `${blog?.data?.attributes?.title}`;
  }, [blog]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const URL = `${import.meta.env.VITE_BASE_URL}${
    blog?.data?.attributes?.thumbnail?.data[0]?.attributes?.url
  }`;

  const divStyle = {
    backgroundImage: `url("${URL}")`,
  };
  return (
    <div className="blog-page">
      <div className="background-layout"></div>
      <HeaderPagination />
      <div className="img" style={divStyle}></div>
      <div className="blog-page-container">
        <RelatedArticle />
        <div className="blog-text">
          <Markdown>{blog?.data?.attributes?.blog}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default BlogViews;
