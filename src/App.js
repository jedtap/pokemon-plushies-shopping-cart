import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/App.css'

import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Products from '../src/helpers/Products';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const toggleCart = () => {
    const overlay = document.querySelector('.cart-overlay');
    overlay.style.display === 'none' ? overlay.style.display = 'flex' : overlay.style.display = 'none';
  };

  const addToCart = (item) => {
    if(cartItems.find(x => x.key === item.key)) {
      // If the item is already in the cart, remove it and add count 1
      const oldItems = cartItems;
      let clickedItem = cartItems.find(x => x.key === item.key);
      clickedItem.quantity += 1;

      const newItems = oldItems.filter(x => x.key !== item.key);
      setCartItems(newItems.concat(clickedItem));

      // Update itemcount
      setItemCount(itemCount+1);
    } else {
      setCartItems(cartItems.concat( { key: item.key, quantity: 1, name: item.name, price: item.price, img: item.img, alt: item.alt }));
      setItemCount(itemCount+1);
    }
  }

  const lessItem = (item) => {
    const oldItems = cartItems;
    let clickedItem = cartItems.find(x => x.key === item.key);
    clickedItem.quantity -= 1;
    setItemCount(itemCount-1);

    const newItems = oldItems.filter(x => x.key !== item.key);
    clickedItem.quantity <= 0 ? setCartItems(newItems) : setCartItems(newItems.concat(clickedItem));
  }

  const moreItem = (item) => {
    const oldItems = cartItems;
    let clickedItem = cartItems.find(x => x.key === item.key);
    clickedItem.quantity += 1;
    setItemCount(itemCount+1);

    const newItems = oldItems.filter(x => x.key !== item.key);
    setCartItems(newItems.concat(clickedItem));
  }

  const removeItem = (item) => {
    const oldItems = cartItems;
    let clickedItem = cartItems.find(x => x.key === item.key);
    setItemCount(itemCount-clickedItem.quantity);

    const newItems = oldItems.filter(x => x.key !== item.key);
    setCartItems(newItems);
  }

  // Fetch cart info from localStorage on mount
  useEffect(()=>{
    const storedItemCount = JSON.parse(window.localStorage.getItem("storedItemCount"));
    const storedCartItems = JSON.parse(window.localStorage.getItem("storedCartItems"));
    if (storedItemCount) { 
      setItemCount(storedItemCount);
      setCartItems(storedCartItems);
    }
  },[])

  // Save cart to localStorage on itemCount/cartItems update
  useEffect(()=>{
    window.localStorage.clear();
    window.localStorage.setItem("storedItemCount", JSON.stringify(itemCount));
    window.localStorage.setItem("storedCartItems", JSON.stringify(cartItems));
  },[itemCount, cartItems]);

  return (<>
    <BrowserRouter> {/*basename={process.env.PUBLIC_URL} */}
      <NavBar openCart={toggleCart} itemCount={itemCount} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<>
          <div className="shop-gallery"> {Products().map((item) => <Shop item={item} addToCart={addToCart}/>)} </div>
        </>} />
        {/* <Route path='/shop/:productName' element={<Product updateCart={updateCart} />} /> */}

      </Routes>

      {/* <Shop updateCart={updateCart} /> */}    
      {/* <Footer /> */}
      {/* <Cart items={cartItems} itemCount={itemCount} open={cartOpen} closeCart={toggleCart} updateCart={updateCart} removeCartItem={removeCartItem} /> */}
      <Cart closeCart={toggleCart} itemCount={itemCount} cartItems={cartItems} lessItem={lessItem} moreItem={moreItem} removeItem={removeItem} />
    </BrowserRouter>
  </>);
};

export default App;