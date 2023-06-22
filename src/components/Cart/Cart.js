import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.products.products);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((elem) => (
          <CartItem key={elem.id} item={elem} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
