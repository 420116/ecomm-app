import React from "react";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCartHandler());
  };
  return (
    <div onClick={toggleCartHandler} className={classes.cartBtn}>
      <div>
        <span>{totalQuantity} </span>
      </div>
      <BsCartFill />
    </div>
  );
};

export default CartButton;
