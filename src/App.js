import React, { BrowserRouter, Routes, Route } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import NavBar from "./components/NavBar";
// import Home from "./components/Home";
// import Shop from "./components/Shop";
// import About from "./components/About";

const App = () => {
  // function iconLocator(id) {
  //   return process.env.PUBLIC_URL + "/icons/icon-" + id + ".svg";
  // }
  
  return(<>
    <NavBar />
    <h2>hello there</h2>  

    {/* <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='about' element={<About iconLocator={iconLocator}  />}/>
      </Routes>
    </BrowserRouter> */}
  </>);
}

export default App;