import React from "react";
import "./assets/style/style.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { getCategories } from "./utils/api/categories";
import { useDispatch, useSelector } from "react-redux";
import { newCategoryCall } from "./redux/categorySlice";
import { paths } from "./utils/constant";
import AppLoading from "./Components/AppLoading";
import Home from "./Page/Home/Home";
import SearchResult from "./Page/SearchResult/SearchResult";
import ShoppingChart from "./Page/ShoppingCart/ShoppingCart";
import Payment from "./Page/Payment/Payment";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Successfully from "./Components/Successfully/Successfully";
import Article from "./Page/Article/Article";
import BlogViews from "./Page/BlogViews/BlogViews";
import ProductDetail from "./Page/ProductDetail/ProductDetail";
import Error from "./Page/Error";
import Profile from "./Components/Profile/Profile";
import PaymentSuccesfull from "./Page/PaymentSuccesfull/PaymentSuccesfull";
const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function getAllCategories() {
      const categoriesData = await getCategories();
      dispatch(
        newCategoryCall({ stateName: "category", data: categoriesData })
      );
    }
    getAllCategories();
  }, []);
  const category = useSelector((state) => state.categorySlice.data.category);
  const newLog = useSelector((state) => state.logSlice.logPage);

  return (
    <>
      <BrowserRouter fallbackElement={AppLoading}>
        <NavBar category={category} />
        <Login newLog={newLog} />
        <Register newLog={newLog} />
        <Successfully newLog={newLog} />
        <Profile newLog={newLog} />
        <Routes>
          <Route index element={<Home />} />
          <Route path={paths.SEARCHRESULT} element={<SearchResult />} />
          <Route path={paths.SEARCHRESULTCATEGORY} element={<SearchResult />} />
          <Route
            path={paths.PAYMENTSUCCESFULL}
            element={<PaymentSuccesfull />}
          />
          <Route path={paths.SHOPPINGCART} element={<ShoppingChart />} />
          <Route path={paths.ARTICLE} element={<Article />} />
          <Route path={paths.BLOG} element={<BlogViews />} />
          <Route path={paths.PRODUCTDETAIL} element={<ProductDetail />} />
          <Route path={"/:category/products/:id"} element={<ProductDetail />} />
          <Route path={paths.PAYMENT} element={<Payment />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
