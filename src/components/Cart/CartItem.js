import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { addProduct, removeProduct } from "../../store/product";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, totalPrice, price } = props.item;

  const addHandler = () => {
    dispatch(
      addProduct({
        id,
        title,
        price,
      })
    );
  };
  const removeHandler = () => {
    console.log(id);
    dispatch(removeProduct(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
