import { useEffect, useState } from "react";

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const handleEventAddToCart = (e: Event) => {
      const item = (e as CustomEvent<{ item: Item }>).detail.item;
      console.log(item);
      setItems((prev) => [...prev, item]);
    };
    window.addEventListener("cart:add", handleEventAddToCart, {});
    return () => window.removeEventListener("cart:add", handleEventAddToCart);
  }, []);

  return (
    <>
      <h3>Cart</h3>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </>
  );
}
