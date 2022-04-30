import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./App.module.css";
import Cards from "./components/Cards";
import CartItems from "./components/CarItems";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import { fetchCartData } from "./store/cart-thunks";
var isLoadFirst = true;

const App = () => {
  const state = useSelector((state) => state.cart);
  const products = state.products;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoadFirst) {
      isLoadFirst = false;
      dispatch(fetchCartData());
    }
  }, [dispatch]);
  return (
    <div>
      <Header />
      {state.showCart && <CartItems />}
      {state.isPending ? (
        <div className={classes.content_spinner}>
          <LoadingSpinner />
        </div>
      ) : (
        <div className={classes.product_container}>
          {products.map((item) => {
            return <Cards key={item.id} {...item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
