import Button from "./Button";
import classes from "./ARButtons.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const ARButtons = (props) => {
  const dispatch = useDispatch();
  const removeItemHandler = (context) => {
    dispatch(cartActions.removeQuantity(context));
    dispatch(cartActions.removeItems(context));
  };
  const addItemToHandler = (context) => {
    dispatch(cartActions.updateQuantity(context));
    dispatch(cartActions.addItems(context));
  };
  return (
    <div className={classes.details}>
      <Button
        className="btn blue"
        context={props.context}
        onClick={removeItemHandler}
      >
        -
      </Button>
      <div className={classes.quantity}>
        {props.crossSign && 'x'} <span>{props.quantity}</span>
      </div>
      <div>
        <Button
          className="btn blue"
          context={props.context}
          onClick={addItemToHandler}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ARButtons;
