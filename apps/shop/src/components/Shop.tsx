import { ItemCard } from "ui";
import { catalog } from "../assets/catalog";

export default function Shop() {
  const addToCart = (itemId: string) => {
    const item = catalog.find((item) => item.id === itemId);
    if (!item) return;

    // *** SEND EVENT ***
    window.dispatchEvent(
      new CustomEvent("cart:add", {
        detail: {
          item,
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
