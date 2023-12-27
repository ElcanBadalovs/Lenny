import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderBlog.scss'
import { ReactComponent as ArrowRight } from "../../../assets/icon/arrow-down.svg";

const HeaderBlog = ({blog, id}) => {
    const URL = `${import.meta.env.VITE_UPLOAD_IMG}${
        blog?.thumbnail?.data[0]?.attributes?.url
      }`;
      const divStyle = {
        backgroundImage: `url("${URL}")`,
      };
  return (
    <Link to={`/blog/${id}`}>
        <div className="blog-header-card">
        <div className="blog-img" style={divStyle}></div>
        <div className="blog-card-text-box">
          <h1 className="card-title">{blog?.title}</h1>
          <p className="card-description">
            Jerome Stanline is a delivery driver for Kangaroo Direct, an Lenny
            Delivery Service Partner in the Baltimore, Maryland area. Follow
            her... <span className="descriptio-read-more">Read more</span>
          </p>
          <p className="card-description-1024">
            Jerome Stanline is a delivery driver for Kangaroo Direct, an Lenny
            Delivery Service Partner in the Baltimore, Maryland area. Follow her
            on a tour of her favorite features in the..
            <span className="descriptio-read-more">Read more</span>
          </p>
          <p className="card-description-1440">
            Jerome Stanline is a delivery driver for Kangaroo Direct, an Lenny
            Delivery Service Partner in the Baltimore, Maryland area. Follow her
            on a tour of her favorite features in the new electric delivery van.
            <span className="descriptio-read-more">Read more</span>
          </p>
          <span className="read-more">
            Read more <ArrowRight className="arrow-right" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default HeaderBlog
