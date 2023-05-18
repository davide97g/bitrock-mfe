import { ItemCard } from "ui";
import { CartItem } from "types";
import { catalog } from "../assets/catalog";

export default function Shop() {
  const addToCart = (itemId: string) => {
    const item = catalog.find((item) => item.id === itemId);
    if (!item) return;

    const cartItem: CartItem = {
      quantity: 1,
      ...item,
    };
    window.dispatchEvent(
      new CustomEvent("cart:add", {
        detail: {
          item: cartItem,
        },
      })
    );
  };

  return (
    <div>
      <h2>Shop</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {catalog.map((item) => (
          <ItemCard
            key={item.id}
            itemId={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
