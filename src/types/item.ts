export type TCategory = {
  id: string;
  key: string;
  name: string;
}

export type TItem = {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
};
