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

const ProductCard = ({ product }) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#0288d1",
    },
  });

  return (
    <Container
      sx={{
        p: 2,
        m: 0,
        boxShadow: 2,
      }}
    >
      <Card style={{ boxShadow: "none" }}>
        <CardMedia
          component="img"
          height="180"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <StyledRating
            name="half-rating-read"
            precision={0.5}
            value={product.rating}
            readOnly
          />
          <Typography variant="h5">{product.title}</Typography>
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
              ${product.price}
            </Typography>
            <Typography variant="body1" color="#ffb74d">
              {product.discountPercentage}% Off
            </Typography>
          </Stack>
          <Typography variant="body2">{product.stock} left in stock</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", paddingTop: 0 }}>
          <Button
            variant="contained"
            sx={{
              "&:hover": {
                backgroundColor: "secondary",
              },
            }}
          >
            Edit
          </Button>
          <Button variant="outlined">Delete</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ProductCard;
