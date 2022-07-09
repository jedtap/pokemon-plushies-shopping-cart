import uniqid from 'uniqid';

const Products = [
  { id: uniqid, name: 'Multi-Purpose Grinding Red Speed Coated 64mm Flat', price: 69, img: require('../Media/1.png') },
  { id: uniqid, name: 'Multi-Purpose Grinding Red Speed Coated 64mm Flat', price: 69, img: require('../Media/1.png') },
];

const RandomSort = () => {
  return Products.sort(() => 0.5 - Math.random());
};

export default RandomSort;