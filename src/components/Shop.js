import '../styles/Shop.css';
// import { Link } from "react-router-dom";
// import Products from '../helpers/Products';

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

// <section className="Shop">
//   <h2 className='ShopHeading'>Shop Espresso Tools</h2>
//   <div className='ProductGrid'>
//     {products.map((product) =>
//       <article key={product.id} className='ShopProduct'>
//         <Link to={product.name}>
//           <img src={product.img} alt={`${product.vendor} - ${product.name}`} className='ShopImg' />
//         </Link>

//         <div>
//           <small className='ShopVendor'>{product.vendor}</small>
//           <h3 className='ProductName'>
//             <Link to={product.name}>{product.name}</Link>
//           </h3>
//           <strong className='ShopPrice'>{product.price}</strong>
//         </div>

//         {(product.inStock()) ? 
//           <button type='button' className='Button PrimaryButton' onClick={() => updateCart(product, 1, true)}>Add to cart</button>
//           : <button type='button' className='Button PrimaryButton' disabled>Add to cart</button>
//         }
//       </article>
//     )}
//   </div>
// </section>