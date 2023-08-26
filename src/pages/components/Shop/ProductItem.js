import Card from '../UI/Card'
import classes from './ProductItem.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart } from '../Store/CartItemsSlice'

const ProductItem = (props) => {
  const { title, price, description } = props

  const dispatch = useDispatch()

  const onAddToCartHandler = () => {
    dispatch(addItemToCart({ title, price }))
    console.log('btn_click')
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
