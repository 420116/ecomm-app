import { cartActions } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    };

    const response = await getRequest();
    dispatch(cartActions.addProducts(response));
    dispatch(cartActions.showNotification({ isPending: false }));
  };
};
