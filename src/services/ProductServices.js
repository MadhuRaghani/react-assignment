import axios from "axios";

export const getProducts = async (setProducts) => {
  try {
    const productsResponse = await axios.get("https://dummyjson.com/products");
    if (productsResponse.status === 200) {
      setProducts(productsResponse.data.products);
    }
  } catch (e) {
    console.error(e);
  }
};

export const searchProducts = async (query) => {
  try {
    const searchedProductsResponse = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );
    if (searchedProductsResponse.status === 200) {
      console.log(searchedProductsResponse.data.products);
    }
  } catch (e) {
    console.error(e);
  }
};
