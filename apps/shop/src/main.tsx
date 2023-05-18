import("./bootstrap").then(({ mount }) => {
  const localRoot = document.getElementById("shop-dev-root");

  mount({
    mountPoint: localRoot!,
    routingStrategy: "browser",
  });
});

export {};
