import classes from './CartItem.module.css'

import { useDispatch } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../Store/CartItemsSlice'

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item
  const dispatch = useDispatch();

  const onAddToCartHandler = () => {
    dispatch(addItemToCart({ title, price }));
  };

  const onRemoveFromCartHandler = () => {
    dispatch(removeItemFromCart({ title }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price * quantity).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveFromCartHandler}>-</button>
          <button onClick={onAddToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;



// return (
//   <li className={classes.item}>
//     <header>
//       <h3>{title}</h3>
//       <div className={classes.price}>
//         ${total.toFixed(2)}{' '}
//         <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
//       </div>
//     </header>
//     <div className={classes.details}>
//       <div className={classes.quantity}>
//         x <span>{quantity}</span>
//       </div>
//       <div className={classes.actions}>
//         <button onClick={onRemoveFromCartHandler}>-</button>
//         <button onClick={onAddToCartHandler}>+</button>
//       </div>
//     </div>
//   </li>
// );
// };