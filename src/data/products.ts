import {Product} from "@/types/product";

const products: Product[] = [
  {
    id: 'p1',
    title: 'Produto 1',
    description: 'Descrição do produto 1',
    price: 9.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg',
    stock: 37
  },
  {
    id: 'p2',
    title: 'Produto 2',
    description: 'Descrição do produto 2',
    price: 20,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Giant_rubber_duck_at_the_Toronto_Waterfront.jpg/800px-Giant_rubber_duck_at_the_Toronto_Waterfront.jpg',
    stock: 20
  },
  {
    id: 'p3',
    title: 'Produto 3',
    description: 'Descrição do produto 3',
    price: 30,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rubber_Duck_%288374802487%29.jpg/330px-Rubber_Duck_%288374802487%29.jpg',
    stock: 15
  },
  {
    id: 'p4',
    title: 'Produto 4',
    description: 'Descrição do produto 4',
    price: 29.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rubber_duckies_So_many_ducks.jpg/1280px-Rubber_duckies_So_many_ducks.jpg',
    stock: 18
  },
  {
    id: 'p5',
    title: 'Produto 5',
    description: 'Descrição do produto 5',
    price: 40.5,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rubber_Duck_in_Parramatta_Park.jpg/1024px-Rubber_Duck_in_Parramatta_Park.jpg',
    stock: 26
  },
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000)
  });
}

