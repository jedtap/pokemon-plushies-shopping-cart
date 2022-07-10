// import '../styles/Shop.css';
// import { Link } from "react-router-dom";
// import Products from '../helpers/Products';

import Products from '../helpers/Products';


const CartItem = (item) => {
  return (<>

    <div className='cart-item'>
      <div className='cart-item-image'></div>
      <div className='cart-item-details'>
        {/* <h5>{item.quantity}</h5> */}
        {/* <h6>$ {Products.find(x => x.key === item.key)}</h6> */}
      </div>
      <div className='cart-item-quantity'>
          <div>—</div>
          <div> {item.quantity} </div>
          <div> + </div>
          <div> Remove </div>
      </div>
    </div>


  </>);
};

export default CartItem;