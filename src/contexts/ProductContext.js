import { createContext, useEffect, useState } from "react";
import {
  addAProduct,
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
      value={{
        products,
        addAProduct,
        editAProduct,
        deleteAProduct,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
