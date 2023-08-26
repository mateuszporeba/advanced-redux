import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../Store/CartItemsSlice'

const Cart = (props) => {
  const cartItems = useSelector(selectCartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem
            key={item.title} // Make sure to use a unique key
            item={item}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;

// return (
//   <Card className={classes.cart}>
//     <h2>Your Shopping Cart</h2>
//     <ul>
//       <CartItem
//         item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
//       />
//     </ul>
//   </Card>
// );
// };

// export default Cart;