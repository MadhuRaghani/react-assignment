import {
  Card,
  Rating,
  Button,
  Container,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import EditModal from "./EditModal";
import { getDiscountedPrice } from "../services/ProductServices";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#0288d1",
    },
  });

  const { products, deleteAProduct, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate(`/product/${product.id}`);
    e.stopPropagation();
  };

  return (
    <Container
      sx={{
        p: 2,
        m: 0,
        boxShadow: 2,
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <Card style={{ boxShadow: "none" }}>
        <CardMedia
          component="img"
          height="180"
          image={product.thumbnail}
          alt={product.title}
          onClick={(e) => handleNavigation(e)}
        />
        <CardContent onClick={(e) => handleNavigation(e)}>
          <StyledRating
            name="half-rating-read"
            precision={0.5}
            value={product.rating}
            readOnly
          />
          <Typography variant="h6" noWrap={true}>
            {product.title}
          </Typography>
          <Stack
            direction="row"
            spacing={5}
            sx={{ justifyContent: "space-between" }}
          >
            <Typography
              variant="body1"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              ${getDiscountedPrice(product.price, product.discountPercentage)}
            </Typography>
            <Typography variant="body1" color="#ffb74d">
              {product.discountPercentage}% Off
            </Typography>
          </Stack>
          <Typography variant="body2">{product.stock} left in stock</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", paddingTop: 0 }}>
          <EditModal product={product} />
          <Button
            variant="outlined"
            onClick={(e) => {
              deleteAProduct(product.id, products, setProducts);
              e.stopPropagation();
            }}
            endIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ProductCard;
