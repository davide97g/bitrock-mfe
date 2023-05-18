import { useEffect, useState } from "react";
import { CartItem } from "types";
import { CartItemCard } from "ui";

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const handleEventAddToCart = (e: Event) => {
      const item = (e as CustomEvent<{ item: CartItem }>).detail.item;
      console.log(item);
      const savedItem = items.find((i) => i.id === item.id);
      if (savedItem) {
        savedItem.quantity++;
        setItems([...items]);
      } else setItems([...items, item]);
    };
    window.addEventListener("cart:add", handleEventAddToCart, {});
    return () => window.removeEventListener("cart:add", handleEventAddToCart);
  }, []);

  const removeFromCart = (itemId: string) =>
    setItems(items.filter((item) => item.id !== itemId));

  const changeQuantity = (itemId: string, quantity: number) => {
    const item = items.find((item) => item.id === itemId);
    if (!item) return;

    item.quantity = quantity;
    setItems([...items]);
  };

  return (
    <>
      <h3>Cart</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {items.map((item) => (
          <CartItemCard
            key={item.id}
            itemId={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
            removeFromCart={removeFromCart}
            changeQuantity={changeQuantity}
          />
        ))}
      </div>
    </>
  );
}
