import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  Rating,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";
import { getDiscountedPrice } from "../services/ProductServices";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

function Product() {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find(
    (eachProduct) => eachProduct.id === parseInt(productId)
  );

  return (
    <Container maxWidth="sm" sx={{ bgcolor: "white" }}>
      <Grid container>
        <Grid item xs={7} sx={{ px: 0.4 }}>
          <ImageList cols={2} rowHeight={164}>
            {product?.images?.map((item) => (
              <ImageListItem
                elevation={2}
                key={item.img}
                sx={{
                  boxShadow: 2,
                  borderRadius: 1,
                }}
              >
                <img
                  srcSet={item}
                  src={item}
                  loading="lazy"
                  alt={product?.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={5} sx={{ px: 0.4 }}>
          <Typography square elevation={0}>
            {product?.title}
          </Typography>
          <Rating
            sx={{ fontSize: "0.7rem" }}
            name="half-rating-read"
            precision={0.5}
            value={product?.rating}
            readOnly
          />
          <Divider variant="fullWidth" />
          <Box>
            <Typography
              variant="overline"
              letterSpacing={0.6}
              sx={{ fontSize: "0.65rem", mr: 0.8 }}
            >
              ${getDiscountedPrice(product?.price, product?.discountPercentage)}
            </Typography>
            <Typography
              variant="overline"
              letterSpacing={0.3}
              sx={{
                color: "#535666",
                fontSize: "0.6rem",
                textDecoration: "line-through",
                mr: 0.3,
              }}
            >
              ${product?.price}
            </Typography>
            <Typography
              variant="overline"
              sx={{ color: "#cc0a39", fontSize: "0.63rem" }}
            >
              ({product?.discountPercentage}% OFF)
            </Typography>
          </Box>
          <Button
            sx={{ height: "20px", fontSize: "0.63rem", mb: 1 }}
            variant="contained"
          >
            Buy Now
          </Button>
          <Divider variant="fullWidth" />
          <Box sx={{ mb: 1 }}>
            <Typography
              variant="overline"
              square
              elevation={0}
              sx={{ fontSize: "0.5rem" }}
            >
              Product Details:
            </Typography>
            <Grid container={"true"} item sx={12}>
              <Grid item={"true"} xs={6}>
                <Typography
                  variant="subtitle1"
                  square
                  sx={{ fontSize: "0.5rem", fontWeight: "550" }}
                >
                  Brand
                </Typography>
                <Typography
                  variant="subtitle1"
                  square
                  sx={{ fontSize: "0.5rem", fontWeight: "550" }}
                >
                  Category
                </Typography>
              </Grid>
              <Grid item={"true"} xs={6}>
                <Typography
                  variant="subtitle1"
                  square
                  sx={{ fontSize: "0.5rem" }}
                >
                  {product?.brand}
                </Typography>
                <Typography
                  variant="subtitle1"
                  square
                  sx={{ fontSize: "0.5rem" }}
                >
                  {product?.category}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider variant="fullWidth" />
          <Box>
            <Typography
              variant="overline"
              square
              elevation={0}
              sx={{ fontSize: "0.5rem" }}
            >
              About this item
            </Typography>
            <Typography
              variant="h6"
              square
              elevation={0}
              sx={{ fontSize: "0.5rem" }}
            >
              {product?.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
