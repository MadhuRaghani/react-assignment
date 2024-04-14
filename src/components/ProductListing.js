import React, { useContext } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import ProductCard from "./ProductCard";
import { ProductContext } from "../contexts/ProductContext";
import { getProducts } from "../services/ProductServices";

function ProductListing() {
  const { products, setProducts } = useContext(ProductContext);

  const productsToBeShown = products.filter(
    (product) => !(product?.isDeleted || false)
  );

  const handlePagination = (_, pageNo) => {
    // console.log(e, pageNo);
    getProducts(setProducts, 10, (pageNo - 1) * 10);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container sx={{ gap: 1, justifyContent: "center" }}>
        {productsToBeShown?.map((product) => (
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              width: "300px",
              // height: "520px",
              margin: 2,
            }}
            key={product.id}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ m: 5 }}>
        <Pagination
          count={10}
          color="primary"
          size="large"
          sx={{ display: "flex", justifyContent: "center" }}
          onChange={handlePagination}
        />
      </Box>
    </div>
  );
}

export default ProductListing;
