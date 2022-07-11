import '../styles/Cart.css'

const Cart = ({ closeCart, itemCount, cartItems }) => {


  const displayCartItems = (
    (itemCount > 0) ? cartItems.map((item) =>

      <div className='cart-item'>
        <img src={item.img} alt={item.alt} className='cart-item-image' />
        <div className='cart-item-details'>
          <h5>{item.name}</h5>
          <h6>$ {item.price}</h6>
        </div>
        <div className='cart-item-quantity'>
            <div>—</div>
            <div> {item.quantity} </div>
            <div> + </div>
            <div> Remove </div>
        </div>
      </div>

    ) : null
  );


  return (<>
    <div className='cart-overlay'>
      <div className='cart-main'>

        <div className='cart-header'>
          <div className='cart-close' onClick={closeCart}>x</div>
          <h3>Shopping Cart</h3>
          <h6>{itemCount} items</h6>
        </div>

        <div className='cart-content'> {displayCartItems} </div>

        <button type="button" className="btn btn-outline-secondary" disabled>Proceed to checkout (not part of scope)</button>
      </div>
    </div>
  </>);
};

export default Cart;