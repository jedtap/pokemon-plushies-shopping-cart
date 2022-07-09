import uniqid from 'uniqid';

const Products = [
  { id: uniqid, name: 'Bulbasaur Plushie', price: 14.99, alt: 'photo of a Bulbasaur plushie', img: require('../media/bulbasaur.jpg') },
  { id: uniqid, name: 'Charmander Plushie', price: 14.99, alt: 'photo of a Charmander plushie', img: require('../media/charmander.jpg') },
  { id: uniqid, name: 'Ditto as Dragonite Plushie', price: 11.99, alt: 'photo of a Ditto plushie transformed into Dragonite', img: require('../media/ditto-dragonite.jpg') },
  { id: uniqid, name: 'Ditto as Gengar Plushie', price: 11.99, alt: 'photo of a Ditto plushie transformed into Gengar', img: require('../media/ditto-gengar.jpg') },
  { id: uniqid, name: 'Ditto as Lapras Plushie', price: 11.99, alt: 'photo of a Ditto plushie transformed into Lapras', img: require('../media/ditto-lapras.jpg') },
  { id: uniqid, name: 'Eevee Plushie', price: 19.99, alt: 'photo of an Eevee plushie', img: require('../media/eevee.jpg') },
  { id: uniqid, name: 'Pikachu Kanazawa Plushie', price: 27.99, alt: 'photo of a Pikachu plushie wearing a Kanazawa dress', img: require('../media/pikachu-kanazawa.jpg') },
  { id: uniqid, name: 'Pikachu Plushie', price: 24.99, alt: 'photo of a Pikachu plushie', img: require('../media/pikachu.jpg') },
  { id: uniqid, name: 'Squirtle Plushie', price: 14.99, alt: 'photo of a Squirtle plushie', img: require('../media/squirtle.jpg') },
  { id: uniqid, name: 'Snorlax Plushie', price: 12.99, alt: 'photo of a Snorlax plushie', img: require('../media/snorlax.jpg') },
  { id: uniqid, name: 'Growlithe Plushie', price: 12.99, alt: 'photo of a Growlithe plushie', img: require('../media/growlithe.jpg') },
];

const RandomSort = () => {
  return Products.sort(() => 0.5 - Math.random());
};

export default RandomSort;