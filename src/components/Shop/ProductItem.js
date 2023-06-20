import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addProduct } from "../../store/product";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props.product;
  const clickHandler = () => {
    const prodObj = {
      id,
      title,
      price,
      amount: 1,
    };
    dispatch(addProduct(prodObj));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={clickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;