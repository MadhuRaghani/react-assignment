import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  Rating,
  ImageList,
  ImageListItem,
  Stack,
} from "@mui/material";
import { getDiscountedPrice } from "../services/ProductServices";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import EditModal from "./EditModal";

function Product() {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find(
    (eachProduct) => eachProduct.id === parseInt(productId)
  );

  return (
    <Container sx={{ bgcolor: "white", flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={7} sx={{ px: 0.4 }}>
          <ImageList cols={2} rowHeight={320}>
            {product?.images?.map((item) => (
              <ImageListItem
                elevation={2}
                key={item}
                sx={{
                  width: "320px",
                  boxShadow: 2,
                  borderRadius: 1,
                  my: 1,
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
          <Box mt={5}></Box>
          <Typography elevation={0} fontSize={40}>
            {product?.title}
          </Typography>
          <Rating
            sx={{ fontSize: "1.2rem" }}
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
              fontSize={24}
              sx={{ mr: 0.8 }}
            >
              ${getDiscountedPrice(product?.price, product?.discountPercentage)}
            </Typography>
            <Typography
              variant="overline"
              fontSize={24}
              letterSpacing={0.3}
              sx={{
                color: "#535666",
                textDecoration: "line-through",
                mr: 0.3,
              }}
            >
              ${product?.price}
            </Typography>
            <Typography
              fontSize={24}
              variant="overline"
              sx={{ color: "#cc0a39" }}
            >
              ({product?.discountPercentage}% OFF)
            </Typography>
          </Box>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", fontSize: "0.8rem", mb: 1 }}
          >
            <EditModal product={product} />
            {/* <Button
              variant="outlined"
              onClick={() => {
                deleteAProduct(product.id, products, setProducts);
              }}
              endIcon={<DeleteIcon />}
            >
              Delete
            </Button> */}
          </Stack>
          <Divider variant="fullWidth" />
          <Box sx={{ mb: 1 }}>
            <Typography variant="overline" fontSize={24} elevation={0}>
              Product Details:
            </Typography>
            <Grid container={true} item xs={12}>
              <Grid item={true} xs={6}>
                <Typography
                  fontSize={20}
                  variant="subtitle1"
                  sx={{ fontWeight: "550" }}
                >
                  Brand
                </Typography>
                <Typography
                  fontSize={20}
                  variant="subtitle1"
                  sx={{ fontWeight: "550" }}
                >
                  Category
                </Typography>
              </Grid>
              <Grid item={true} xs={6}>
                <Typography variant="subtitle1" fontSize={20}>
                  {product?.brand}
                </Typography>
                <Typography variant="subtitle1" fontSize={20}>
                  {product?.category}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider variant="fullWidth" />
          <Box>
            <Typography variant="overline" elevation={0} fontSize={24}>
              About this item
            </Typography>
            <Typography variant="h6" elevation={0} fontSize={20}>
              {product?.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product;
