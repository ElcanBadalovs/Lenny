import React, { useEffect, useState } from "react";
import "./ShoppingList.scss";
import { ReactComponent as TickSquare } from "../../../../../assets/icon/tick-square.svg";
import { ReactComponent as TickSquareActive } from "../../../../../assets/icon/tick-square-active.svg";
import { ReactComponent as Minus } from "../../../../../assets/icon/minus-square.svg";
import { ReactComponent as Plus } from "../../../../../assets/icon/add-square.svg";
import { ReactComponent as Trash } from "../../../../../assets/icon/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  buyProduct,
  addNewCount,
  deletePrice,
} from "../../../../../redux/amountSlice";
import { deleteProductID } from "../../../../../redux/buyProductCount";
import { deleteProduct } from "../../../../../redux/buyProductsList";

const ShoppingList = ({ product, companyName, id }) => {
  const [activeTick, setActiveTick] = useState(false);
  const [count, setCount] = useState(1);
  const URL = `${import.meta.env.VITE_BASE_URL}${
    product.thumbnail.data.attributes.url
  }`;
  const amountSlice = useSelector((state) => state.amountSlice);
  useEffect(() => {
    if (amountSlice.products[product.title]) {
      setActiveTick(true);
    }
  }, [amountSlice]);

  const dispatch = useDispatch();
  const handleBuyProduct = () => {
    if (!activeTick) {
      setActiveTick(true);
    } else {
      setActiveTick(false);
    }
    dispatch(
      buyProduct({
        productName: product.title,
        price: product.price,
        count: count,
        discount: product.discount,
      })
    );
  };
  const handleMinusCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      dispatch(addNewCount({ productName: product.title, newCount: newCount }));
    }
  };
  const handlePlusCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    dispatch(addNewCount({ productName: product.title, newCount: newCount }));
  };
  const deleteBtn = () => {
    dispatch(deleteProduct({ companyName: companyName, id: id }));
    dispatch(deletePrice({ productName: product.title }));
    dispatch(deleteProductID({id: id}));
  };

  return (
    <div className="list">
      <div className="list-box">
        {activeTick ? (
          <TickSquareActive
            className="list-icon"
            onClick={() => handleBuyProduct()}
          />
        ) : (
          <TickSquare
            className="list-icon"
            onClick={() => handleBuyProduct()}
          />
        )}
        <div className="product-content">
          <div className="product-img-box">
            <img src={URL} className="product-img" />
          </div>
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-salesperson">
              {product?.companies?.data[0]?.attributes?.salesperson}
            </p>
            <span className="product-price">${product.price}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="list-btns-box">
          <p className="add-favorite">Add to Favourite</p>
          <div className="list-btns">
            <div className="product-count">
              <Minus className="icon" onClick={handleMinusCount} />
              <p className="count">{count}</p>
              <Plus className="icon" onClick={handlePlusCount} />
            </div>
            <div className="delete" onClick={deleteBtn}>
              <Trash className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
