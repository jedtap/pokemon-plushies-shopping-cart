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
import Cart from './components/Cart';

const App = () => {
  // const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const toggleCart = () => {
    const overlay = document.querySelector('.cart-overlay');
    overlay.style.display === 'none' ? overlay.style.display = 'flex' : overlay.style.display = 'none';
  };

  // const addToCart = (id) => {
    // if(cartItems.find(x => x.id === id)) {
    //   // If the item is already in the cart, remove it and add count 1
    //   const oldItems = cartItems;
    //   let clickedItem = cartItems.find(x => x.id === id);
    //   clickedItem.quantity += 1;

    //   const newItems = oldItems.filter(x => x.id !== id);
    //   setCartItems(newItems.concat(clickedItem));

    //   // Update itemcount
    //   setItemCount(itemCount+1);

    // } else {
    //   setCartItems(cartItems.concat( { id: id, quantity: 1 }));
    //   setItemCount(itemCount+1);
    // }
    // console.log(1);
    // setItemCount(itemCount+1);
    // console.log(1);
  // }


  // const updateCart = (product, quantity, open) => {
  //   const item = cartItems.find((item) => item.product === product);
  //   if (item) {
  //     item.updateQuantity(quantity);
  //     if (item.quantity < 1) { removeCartItem(item.product.name, 1); }
  //   } else {
  //     // const newItem = new CartItem(product, quantity);
  //     // setCartItems(cartItems.concat(newItem));
  //   }
  //   setItemCount(itemCount + parseInt(quantity));
  //   if (open) { toggleCart() }
  // };

  // const removeCartItem = (productName, quantity) => {
  //   setCartItems(cartItems.filter((item) => item.product.name !== productName ));
  //   setItemCount(itemCount - quantity);
  // };

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
      <Cart closeCart={toggleCart} />
    </BrowserRouter>
  </>);
};

export default App;