import { MyButton, Header } from "ui";

export default function Shop() {
  const addToCart = () => {
    window.dispatchEvent(
      new CustomEvent("cart:add", {
        detail: {
          item: {
            id: 1,
            name: "Item 1",
            price: 100,
            quantity: 1,
          },
        },
      })
    );
  };
  return (
    <div>
      <h2>Shop</h2>
      <Header text="test" />
      <MyButton onClick={addToCart}> Add to Cart </MyButton>
    </div>
  );
}
