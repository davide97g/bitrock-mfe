export default function Cart() {
  const items = [
    {
      id: 1,
      name: "Item 1",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Item 2",
      price: 200,
      quantity: 2,
    },
    {
      id: 3,
      name: "Item 3",
      price: 300,
      quantity: 3,
    },
  ];

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
