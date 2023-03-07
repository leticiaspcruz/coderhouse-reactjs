import tshirtImage from './assets/tshirt-mockup2.jpeg';
import jeansImage from './assets/jeans-mockup.jpeg';
import capImage from './assets/cap-mockup.jpg';

export const PRODUCTS = [
  {
    id: '1',
    title: 'camiseta',
    price: 70,
    pictureUrl: tshirtImage,
    productDetail: 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    imgAlt: 'Imagem de uma camiseta',
    category: 'camisetas',
    stock: 5, 
  },
  {
    id: '2',
    title: 'calça',
    price: 100,
    pictureUrl: jeansImage,
    productDetail: 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    imgAlt: 'Imagem de uma calça',
    category: 'calças', 
    stock: 10, 
  },
  {
    id: '3',
    title: 'boné',
    price: 50,
    pictureUrl: capImage,
    productDetail: 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    imgAlt: 'Imagem de um boné',
    category: 'acessórios', 
    stock: 0, 
  },
];
