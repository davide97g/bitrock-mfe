export interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface Catalog {
  items: Item[];
}
