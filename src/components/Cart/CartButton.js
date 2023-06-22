import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggle } from '../../store/ui';

const CartButton = (props) => {
  const totalQte = useSelector(state => state.products.totalQte)
  const dispatch = useDispatch();
  
  const toggleHandler = () => {
    dispatch(toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQte}</span>
    </button>
  );
};

export default CartButton;
