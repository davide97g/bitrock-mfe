import { useEffect, useState } from "react";
import { CartItem } from "types";
import { CartItemCard } from "ui";

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const handleEventAddToCart = (e: Event) => {
      const item = (e as CustomEvent<{ item: CartItem }>).detail.item;
      const itemIndex = items.findIndex((i) => i.id === item.id);
      if (itemIndex >= 0) {
        items[itemIndex].quantity += 1;
        setItems([...items]);
      } else setItems((prev) => [...prev, item]);
    };
    window.addEventListener("cart:add", handleEventAddToCart);
    return () => window.removeEventListener("cart:add", handleEventAddToCart);
  }, [items]);

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
