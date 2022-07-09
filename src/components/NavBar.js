import { useState } from 'react';
import '../styles/NavBar.css';
import { Link } from "react-router-dom";

const NavBar = ({ openCart, itemCount }) => {
  // const [links, setLinks] = useState(false);
  // const headerLinks = (links) ? 'HeaderLinks Open' : 'HeaderLinks';

  return (<>
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/">Poke-plushies</a>

        <div className="navbar navbar-dark">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          
            <li className="nav-item">
              <Link to='/shop' className="nav-link active">Shop</Link>
            </li>

            <li className="nav-item">
              <div className="nav-link active cart-icon" aria-current="page" onClick={openCart}>🛒</div>
              <span className='CartNum'>{itemCount}</span>
            </li>

          </ul>
        </div>

        </div>
    </nav>
  </>);
};

export default NavBar;


// <div className={headerLinks}>
//    <Link to='/shop' onClick={() => setLinks(false)}>Shop</Link>
//   <Link to='/' onClick={() => setLinks(false)}>Home</Link>
// </div>

// <button type='button' className='Button TransparentButton CartButton' onClick={openCart}>
//   <i className='fa-solid fa-cart-shopping'></i>
//   <span className='CartNum'>{itemCount}</span>
// </button>
