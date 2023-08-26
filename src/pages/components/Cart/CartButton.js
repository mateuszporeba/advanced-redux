import classes from './CartButton.module.css'

import { useSelector } from 'react-redux'
import { selectCartItems } from '../Store/CartItemsSlice'

const CartButton = (props) => {

  const cartItems = useSelector(selectCartItems).length

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
