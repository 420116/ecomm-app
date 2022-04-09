import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./Cards.css";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import ARButtons from "./ARButtons";
const Card = (props) => {
  const dispatch = useDispatch();
  const product = { ...{ quantity: 0 }, ...props };

  const addToCartFn = (context) => {
    dispatch(cartActions.updateQuantity(context));
    dispatch(cartActions.addItems(context));
  };

  return (
    <Fragment>
      <div className="card__container">
        <div className="card__container-card">
          <div className="card__container-cardInfo">
            <img
              className="card__image"
              alt={product.description}
              src={product.image}
            />
            <p>{product.category}</p>
            <label>Price : INR {product.price}</label>
            {/* <label></label> */}
            {product.quantity > 0 ? (
              <ARButtons context={product} crossSign={true} quantity={product.quantity} />
            ) : (
              <Button
                onClick={addToCartFn}
                context={product}
                className="btn blue"
              >
                <BsFillCartPlusFill /> Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
