import { createContext, useEffect, useState } from "react";
import {
  addAProduct,
  deleteAProduct,
  editAProduct,
  getProducts,
  searchProducts,
} from "../services/ProductServices";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getProducts(setProducts, 10, 0);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        addAProduct,
        editAProduct,
        deleteAProduct,
        setProducts,
        searchQuery,
        setSearchQuery,
        searchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
