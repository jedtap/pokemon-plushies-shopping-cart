import '../styles/Cart.css'
import CartItem from './CartItem'

const Cart = ({ closeCart, cartItems, itemCount }) => {

  return (<>
    <div className='cart-overlay'>
      <div className='cart-main'>

        <div className='cart-header'>
          <div className='cart-close' onClick={closeCart}>x</div>
          <h3>Shopping Cart</h3>
          <h6>{itemCount} items</h6>
        </div>

        {/* <div className='cart-content'> {cartItems.map((item) => <CartItem item={item} />)} </div> */}

        <button type="button" className="btn btn-outline-secondary" disabled>Proceed to checkout (not part of scope)</button>
      </div>
    </div>
  </>);
};

export default Cart;