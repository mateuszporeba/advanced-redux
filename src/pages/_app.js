import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'

import '../styles/globals.css'

import store from './components/Store/Store'
import { useState } from 'react'
import { Provider} from 'react-redux'

function App() {

  const [showCart, setShowCart] = useState(false);

  return (
    <Provider store={store}>
      <Layout toogleCartComponent={() =>setShowCart(!showCart)}>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Provider>
  );
}

export default App;
