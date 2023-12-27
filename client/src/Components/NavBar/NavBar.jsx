import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { ReactComponent as Logos } from "../../assets/icon/logo.svg";
import { ReactComponent as ShoppingCart } from "../../assets/icon/shopping-cart.svg";
import { ReactComponent as Menu } from "../../assets/icon/menu.svg";
import { ReactComponent as SearchButtonIcon } from "../../assets/icon/search-normal.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/user.svg";
import { ReactComponent as Yelena } from "../../assets/icon/yelena.svg";
import { ReactComponent as Sms } from "../../assets/icon/sms.svg";
import { ReactComponent as Notification } from "../../assets/icon/notification.svg";
import DropDownMenu from "./components/DropDown/DropDown";
import SelectInput from "./components/Select/Select";
import { addLog } from "../../redux/logSlice";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../utils/api";
import { Link } from "react-router-dom";
import { addNewSearchFilter } from "../../redux/searchProductSlice";
import { userData } from "../helpers";

const NavBar = ({ category }) => {
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState(null);
  const { jwt } = userData();
  const handleDropDownActivate = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };


  const fetchCategories = async () => {
    const res = await instance.get(`/categories?populate=*`);
    setCategories(res.data);
  };
  const dispatch = useDispatch();
  const openLogin = (value) => {
    dispatch(addLog({ log: value }));
  };
  const [activeProfile, setActiveProfile] = useState(false);
  const openProfile = () => {
    if(!activeProfile){
      dispatch(addLog({ log: 'profile' }));
      setActiveProfile(!activeProfile)
    }else{
      dispatch(addLog({ log: '' }));
      setActiveProfile(!activeProfile)
    }
  }

  const addNewFilter = (key, value) => {
    dispatch(addNewSearchFilter({ stateName: key, data: value }));
  };
  const buyProductCount = useSelector((state) => state.buyProductCount)
  const [productCount, setProductCount] = useState(0);
  useEffect(() => {
    fetchCategories();
    setProductCount(buyProductCount.length)
  }, [buyProductCount, jwt]);
  return (
    <nav className="header">
      <Link to={"/"} className="logo">
        <Logos className="logo" />
      </Link>
      <form
        className="search-container"
        onSubmit={(e) => {
          e.preventDefault();
          addNewFilter("search", searchValue);
        }}
      >
        <SelectInput category={category?.data} className="select-category" />
        <input
          className="search-input"
          type="text"
          placeholder="Search something…"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <Link to={`/searchresult/${searchValue}`}>
          <button className="search-btn">
            <SearchButtonIcon className="search-btn-icon" />
          </button>
        </Link>
      </form>
      <div className="nav-bar-btn">
        <Link to={"/shoppingcart"} className="shopping-link">
          <ShoppingCart className="shopping-btn" />
          {productCount ? (
            <div className="product-count">{productCount}</div>
          ) : (
            ""
          )}
        </Link>
        {!jwt ? (
          <></>
        ) : (
          <>
            <Notification className="notification" />
            <Sms className="sms" />
          </>
        )}
        <div className="line"></div>
        {!jwt ? (
          <div className="user-box" onClick={() => openLogin("register")}>
            <UserIcon className="account-btn" />
          </div>
        ) : (
          <Yelena className="user-image" onClick={() => openProfile()}/>
        )}
        <Menu className="menu-btn" onClick={handleDropDownActivate} />
        <DropDownMenu
          categories={categories?.data}
          openLogin={openLogin}
          active={active}
        />
      </div>
    </nav>
  );
};

export default NavBar;
