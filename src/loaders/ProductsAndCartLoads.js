import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoads = async () => {
  // get data
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // get cart
  const savedCart = getStoredCart();
  console.log(savedCart);
  const InitialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      InitialCart.push(addedProduct);
    }
  }

  return { products, InitialCart };
};
