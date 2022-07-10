const Products = [
  { key: 1, name: 'Bulbasaur Plushie', price: 14.99, alt: 'photo of a Bulbasaur plushie', img: require('../media/bulbasaur.jpg') },
  { key: 2, name: 'Charmander Plushie', price: 14.99, alt: 'photo of a Charmander plushie', img: require('../media/charmander.jpg') },
  { key: 3, name: 'Ditto as Dragonite Plushie', price: 11.99, alt: 'photo of a Ditto plushie transformed into Dragonite', img: require('../media/ditto-dragonite.jpg') },
  { key: 4, name: 'Ditto as Gengar Plushie', price: 11.99, alt: 'photo of a Ditto plushie transformed into Gengar', img: require('../media/ditto-gengar.jpg') },
  { key: 5, name: 'Ditto as Lapras Plushie', price: 11.99, alt: 'photo of a Ditto plushie transformed into Lapras', img: require('../media/ditto-lapras.jpg') },
  { key: 6, name: 'Eevee Plushie', price: 19.99, alt: 'photo of an Eevee plushie', img: require('../media/eevee.jpg') },
  { key: 7, name: 'Pikachu Kanazawa Plushie', price: 27.99, alt: 'photo of a Pikachu plushie wearing a Kanazawa dress', img: require('../media/pikachu-kanazawa.jpg') },
  { key: 8, name: 'Pikachu Plushie', price: 24.99, alt: 'photo of a Pikachu plushie', img: require('../media/pikachu.jpg') },
  { key: 9, name: 'Squirtle Plushie', price: 14.99, alt: 'photo of a Squirtle plushie', img: require('../media/squirtle.jpg') },
  { key: 10, name: 'Snorlax Plushie', price: 12.99, alt: 'photo of a Snorlax plushie', img: require('../media/snorlax.jpg') },
  { key: 11, name: 'Growlithe Plushie', price: 12.99, alt: 'photo of a Growlithe plushie', img: require('../media/growlithe.jpg') },
];

const RandomSort = Products.sort(() => 0.5 - Math.random());

const DisplayProducts = () => {
  return RandomSort;
}

export default DisplayProducts;