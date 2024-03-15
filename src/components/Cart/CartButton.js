import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(uiActions.togglecartIsVisible())
  }


  const { totalQuantity } = useSelector(state => state.cart);

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
