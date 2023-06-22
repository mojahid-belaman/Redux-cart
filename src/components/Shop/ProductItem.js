import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addProduct } from "../../store/product";
import { useEffect } from "react";

const ProductItem = (props) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id, title, price, description } = props.product;

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await fetch(
          "https://reduxcart-cb3e1-default-rtdb.firebaseio.com/products.json",
          {
            method: "PUT",
            body: JSON.stringify(products),
          }
        );
        const data = res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    sendRequest();
  }, [products]);

  const clickHandler = () => {
    const prodObj = {
      id,
      title,
      price,
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
