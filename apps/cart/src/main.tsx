import("./bootstrap").then(({ mount }) => {
  const localRoot = document.getElementById("cart-dev-root");

  mount({
    mountPoint: localRoot!,
  });
});

export {};
