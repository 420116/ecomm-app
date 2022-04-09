import { useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import ARButtons from "./ARButtons";
import Button from "./Button";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const { items, totalAmount } = useSelector((state) => {
    return state.cart;
  });
  //const { title, quantity, total, price,id } = props.item;
  //const dispatch = useDispatch();
  const removeItemHandler = () => {
    //dispatch(cartActions.removeItemFromCart(id));
  };

  const closeModal = () => {
    props.toggleCart();
    // dispatch(cartActions.addItemToCart({
    //   id,
    //   title,
    //   price,
    // }));
  };

  const totalPrice = 0;

  return (
    <div className={classes.modal}>
      <div className={classes.cart__container}>
        <div className={classes.cart__header}>
          <h2>Cart</h2>
          <span className={classes.cart__close} onClick={closeModal}>
            X
          </span>
        </div>
        {items.length === 0 ? (
          <p>No Items...</p>
        ) : (
          <div className={classes.cart__container_content}>
            {items.map((product) => (
              <li key={product.id} className={classes.item}>
                <img src={product.image} alt="" />
                <header>
                  <h3>{product.category}</h3>
                </header>
                <div className={classes.details}>
                  {/* <div className={classes.quantity}>
              {product.totalPrice} x <span>{product.quantity}</span>
            </div>
            <div > */}
                  <ARButtons
                    context={product}
                    crossSign={false}
                    quantity={product.quantity}
                  />
                  {/* </div> */}
                </div>
              </li>
            ))}
            <div className={classes.cart__footer}>
              <span>Total- {totalAmount.toFixed(2)}</span>
              <Button className="btn orange">Check Out</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartItems;
