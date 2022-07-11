import '../styles/Shop.css';

const Shop = ({ item, addToCart }) => {
  return (<>
    <div className="shop-item">
      <img src={item.img} alt={item.alt} className='shop-item-image' />
      <h2 className="shop-item-name">{item.name}</h2>
      <div className="shop-item-price">$ {item.price}</div>
      <div className="btn btn-danger" onClick={() => addToCart(item)} data-key={item.key}>Add to cart</div>
    </div>
  </>);
};

export default Shop;