import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// import Product from './Product';
// import Footer from './Footer';
// import Cart from './Cart';
// import CartItem from '../helpers/CartItem';
import './styles/App.css'

import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Products from '../src/helpers/Products';


const App = () => {
  
  const [cartOpen, setcartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const toggleCart = () => setcartOpen(!cartOpen);

  const updateCart = (product, quantity, open) => {
    const item = cartItems.find((item) => item.product === product);
    if (item) {
      item.updateQuantity(quantity);
      if (item.quantity < 1) { removeCartItem(item.product.name, 1); }
    } else {
      // const newItem = new CartItem(product, quantity);
      // setCartItems(cartItems.concat(newItem));
    }
    setItemCount(itemCount + parseInt(quantity));
    if (open) { toggleCart() }
  };

  const removeCartItem = (productName, quantity) => {
    setCartItems(cartItems.filter((item) => item.product.name !== productName ));
    setItemCount(itemCount - quantity);
  };

  // // Fetch cart info from localStorage on mount
  // useEffect(() => {
  //   const savedItems = JSON.parse(localStorage.getItem('CartItems'));
  //   const savedCount = parseInt(localStorage.getItem('CartCount'));
  //   if (savedItems) {
  //     setCartItems(savedItems);
  //     setItemCount(savedCount);
  //   }
  // }, []);

  // // Save cart to localStorage on cartItems/itemCount update
  // useEffect(() => {
  //   localStorage.setItem('CartItems', JSON.stringify(cartItems));
  //   localStorage.setItem('CartCount', itemCount);
  // }, [cartItems, itemCount]);


  return (<>
    <BrowserRouter> {/*basename={process.env.PUBLIC_URL} */}
      <NavBar openCart={toggleCart} itemCount={itemCount} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<>
          <div className="shop-gallery"> {Products().map((item) => <Shop item={item} />)} </div>
        </>} />
        {/* <Route path='/shop/:productName' element={<Product updateCart={updateCart} />} /> */}

      </Routes>

      {/* <Shop updateCart={updateCart} /> */}    
      {/* <Footer /> */}
      {/* <Cart items={cartItems} itemCount={itemCount} open={cartOpen} closeCart={toggleCart} updateCart={updateCart} removeCartItem={removeCartItem} /> */}
  
    </BrowserRouter>
  </>);
};

export default App;