import axios from "axios";
// import { toast } from "react-toastify";

export const getProducts = async (setProducts, limit = 0, skip = 0) => {
  try {
    const productsResponse = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    if (productsResponse.status === 200) {
      setProducts(productsResponse.data.products);
    }
  } catch (e) {
    console.error(e);
  }
};

export const searchProducts = async (query, setProducts) => {
  try {
    const searchedProductsResponse = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );
    if (searchedProductsResponse.status === 200) {
      setProducts(searchedProductsResponse.data.products);
    }
  } catch (e) {
    console.error(e);
  }
};

export const deleteAProduct = async (productId, products, setProducts) => {
  try {
    const deletedProductResponse = await axios.delete(
      `https://dummyjson.com/products/${productId}`
    );
    if (deletedProductResponse.status === 200) {
      const newProducts = products.map((product) =>
        product.id === productId ? { ...deletedProductResponse.data } : product
      );
      setProducts(newProducts);
      // toast.warning(`Deleted ${deletedProductResponse.data.title}`);
    }
  } catch (e) {
    console.error(e);
  }
};

export const editAProduct = async (
  productId,
  updatedProduct,
  products,
  setProducts
) => {
  try {
    const updatedProductResponse = await axios.patch(
      `https://dummyjson.com/products/${productId}`,
      {
        ...updatedProduct,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    if (updatedProductResponse.status === 200) {
      const newProducts = products.map((product) =>
        product.id === productId ? updatedProductResponse.data : product
      );
      setProducts(newProducts);
      // toast.warning(`Updated ${updatedProductResponse.data.title}`);
    }
  } catch (e) {
    console.error(e);
  }
};

export const addAProduct = async (productToBeAdded, products, setProducts) => {
  try {
    const addedProductResponse = await axios.post(
      `https://dummyjson.com/products/add`,
      {
        ...productToBeAdded,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    if (addedProductResponse.status === 200) {
      setProducts([...products, addedProductResponse.data]);
      // toast.success(`Added ${addedProductResponse.data.title}`);
    }
  } catch (e) {
    console.error(e);
  }
};

export const getAProduct = async (productId) => {
  try {
    const getProductResponse = await axios.get(
      "https://dummyjson.com/products/" + productId
    );
    if (getProductResponse.status === 200) {
      return { ...getProductResponse.data };
    }
  } catch (e) {
    console.error(e);
  }
};

export function getDiscountedPrice(orginalPrice, discountPercentage) {
  let discountedAmount = (orginalPrice * discountPercentage) / 100;
  let discountedPrice = orginalPrice - discountedAmount;
  let roundedDiscountedPrice =
    Math.round((discountedPrice + Number.EPSILON) * 100) / 100;
  return roundedDiscountedPrice;
}
