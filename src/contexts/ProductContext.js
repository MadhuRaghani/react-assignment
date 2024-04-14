import { createContext, useEffect, useState } from "react";
import {
  deleteAProduct,
  editAProduct,
  getProducts,
} from "../services/ProductServices";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, editAProduct, deleteAProduct, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
