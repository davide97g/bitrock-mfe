import { Item } from "./shop";

export interface CartItem extends Item {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}
