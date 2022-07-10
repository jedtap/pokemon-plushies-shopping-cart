import '../styles/Cart.css'

const Cart = ({ closeCart }) => {

  return (<>
    <div className='cart-overlay'>
      <div className='cart-main'>

        <div className='cart-header'>
          <div className='cart-close' onClick={closeCart}>x</div>
          <h3>Shopping Cart</h3>
          <h6>69 Items</h6>
        </div>

        <div className='cart-content'>

          <div className='cart-item'>
            <div className='cart-item-image'></div>
            <div className='cart-item-details'>
              <h5>Pikachu Kanazawa Plushie</h5>
              <h6>$ 27.99</h6>
            </div>
            <div className='cart-item-quantity'>
                <div>—</div>
                <div> 69 </div>
                <div> + </div>
                <div> Remove </div>
            </div>
          </div>

        </div>
        <button type="button" className="btn btn-outline-secondary" disabled>Proceed to checkout (not part of scope)</button>
      </div>
    </div>
  </>);
};

export default Cart;