import classes from './CartButton.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../Store/CartItemsSlice'

const CartButton = (props) => {
  const cartItems = useSelector(selectCartItems).length

  const onClickHandler = () => {
    props.toogleCartComponent()
  }

  return (
    <button className={classes.button}
      onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default CartButton;
