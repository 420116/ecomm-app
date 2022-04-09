import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./App.module.css";
import Cards from "./components/Cards";
import CartItems from "./components/CarItems";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import { cartActions } from "./store/cartSlice";
var isLoadFirst = true;
const fetchData = async () => {
  const getRequest = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  const productsData = await getRequest();
  return productsData;
};

const App = () => {
  const state = useSelector((state) => state.cart);
  const products = state.products;
  const dispatch = useDispatch();
  const [isLoadSpinner, setLoadSpinner] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(!showCart);
  };
  fetchData().then((data) => {
    if (isLoadFirst) {
      dispatch(cartActions.addProducts(data));
      setLoadSpinner(false);
      isLoadFirst = false;
    }
  });
  return (
    <div>
      <Header showCart={showCartHandler} />
      {showCart && <CartItems toggleCart={showCartHandler} />}
      {isLoadSpinner ? (
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
