import React, { useContext } from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { ProductContext } from "../contexts/ProductContext";

function ProductListing() {
  const { products } = useContext(ProductContext);

  const productsToBeShown = products.filter(
    (product) => !(product?.isDeleted || false)
  );

  return (
    <Grid container sx={{ gap: 1, justifyContent: "center" }}>
      {productsToBeShown?.map((product) => (
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            width: "300px",
            height: "520px",
            margin: 2,
          }}
          key={product.id}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductListing;
