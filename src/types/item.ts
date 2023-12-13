export type Category = {
  id: string;
  key: string;
  name: string;
}

export type ItemType = {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
  stock: number;
};
