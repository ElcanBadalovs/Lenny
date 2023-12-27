import React, { useEffect, useState } from "react";
import "./RelatedArticle.scss";
import { instance } from "../../../../utils/api";
import { ReactComponent as Instagram } from "../../../../assets/icon/Instagram.svg";
import { ReactComponent as Twitter } from "../../../../assets/icon/Twitter.svg";
import { ReactComponent as Whatsapp } from "../../../../assets/icon/Whatsapp.svg";
import { ReactComponent as Facebook } from "../../../../assets/icon/facebook.svg";
import { Link } from "react-router-dom";

const RelatedArticle = () => {
  const [blogSize, setBlogSize] = useState("");
  useEffect(() => {
    const fetchRelatedArticle = async () => {
      const res = await instance.get(`/blogs?populate=*`);
      setBlogSize(res?.data?.data);
    };
    fetchRelatedArticle();
  }, []);
  return (
    <div className="related-article">
      <h1 className="related-title">Related Article</h1>
      {blogSize &&
        blogSize.map((blog, index) => {
          if (index < 5 && index !== 3) {
            let URL = `${import.meta.env.VITE_BASE_URL}${
              blog?.attributes?.thumbnail?.data[0]?.attributes?.url
            }`;
            const divStyle = {
              backgroundImage: `url("${URL}")`,
            };
            return (
              <Link to={`/blog/${blog.id}`} key={index}>
                <div className="related-blog">
                  <div className="related-blog-img" style={divStyle}></div>
                  <h3 className="related-blog-title">
                    {blog?.attributes?.title}
                  </h3>
                </div>
              </Link>
            );
          }
        })}
      <div className="related-line"></div>
      <div className="share-content">
        <p className="share-text">Share to :</p>
        <div className="share-btns">
          <Facebook />
          <Instagram />
          <Twitter />
          <Whatsapp />
        </div>
      </div>
    </div>
  );
};

export default RelatedArticle;
