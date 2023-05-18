import { ItemCard } from "ui";
import { CartItem, Item } from "types";

export default function Shop() {
  const catalog: Item[] = [
    {
      id: "1",
      title: "Item 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 100,
      image: "https://picsum.photos/200",
    },
    {
      id: "2",
      title: "Item 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 200,
      image: "https://picsum.photos/201",
    },
    {
      id: "3",
      title: "Item 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 300,
      image: "https://picsum.photos/202",
    },
    {
      id: "4",
      title: "Item 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 400,
      image: "https://picsum.photos/203",
    },
  ];

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
