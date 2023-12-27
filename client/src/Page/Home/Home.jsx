import React, { useState } from "react";
import "./Home.scss";
import { ReactComponent as ProductCardElement } from "../../assets/icon/product-element.svg";
import { ReactComponent as BrokenLine } from "../../assets/icon/broken-line.svg";
import { ReactComponent as ArrowRight } from "../../assets/icon/arrow-down.svg";
import HeaderProductCard from "./Components/HeaderProductCard/HeaderProductCard";
import Category from "./Components/Category/Category";
import { getCategories } from "../../utils/api/categories";
import { getProducts } from "../../utils/api/product";
import { getBlogs } from "../../utils/api/blogs";
import PopularProduct from "./Components/PopularProduct/PopularProduct";
import PromoBanner from "./Components/PromoBanner/PromoBanner";
import HomeArticles from "./Components/HomeArticle/HomeArticles";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [category, setCategory] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [products, setProducts] = useState(null);
  React.useEffect(() => {
    window.scrollTo(0,0);
    async function getAllCategories() {
      try {
        const data = await getCategories();
        setCategory(data);
      } catch (error) {
        console.error("error: " + error);
      }
    }
    getAllCategories();

    async function getAllBlogs() {
      try {
        const newData = await getBlogs();
        setBlogs(newData);
      } catch (error) {
        console.error("error: " + error);
      }
    }
    getAllBlogs();

    async function getAllProducts() {
      const newdata = await getProducts();
      setProducts(newdata);
    }
    getAllProducts();
  }, []);
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-title">
          <h1 className="header-text">
            Upgrade Your Wardrobe With Our Collection
          </h1>
          <h3 className="description-text">
            Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque
            lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est
            ullamcorper nisl amet non mollis.
          </h3>
          <div className="title-btn-box">
            <button className="btn-buy">Buy Now</button>
            <button className="btn-view">View Detail</button>
          </div>
        </div>
        <div className="home-product-container">
          <div className="home-product-box">
            <ProductCardElement className="product-card-element" />
            <BrokenLine />
            <HeaderProductCard category={category} />
          </div>
          <div className="arrow-box">
            <ArrowRight className="arrow-rigth" />
          </div>
        </div>
      </div>

      <div className="category-container">
        <div className="category-header">
          <h2 className="category-header-text">Featured Category</h2>
          <Link to={'/searchresult'}><button className="view-detail-btn">View Detail</button></Link>
        </div>
        <Category category={category?.data} />
      </div>
      <PopularProduct products={products?.data} />
      <PromoBanner />
      <HomeArticles blogs={blogs?.data} />
    </div>
  );
};

export default HomePage;
