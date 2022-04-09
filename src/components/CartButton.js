import React from "react";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    props.toggleCart();
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
