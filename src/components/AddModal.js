import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { ProductContext } from "../contexts/ProductContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddModal() {
  const { addAProduct, products, setProducts } = useContext(ProductContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: 0,
    discountPercentage: 49,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    addAProduct(productData, products, setProducts);
    setProductData({
      title: "",
      description: "",
      price: 0,
      discountPercentage: 49,
      rating: 0,
      stock: 0,
      brand: "",
      category: "",
      thumbnail: "",
    });
    handleClose();
  };

  return (
    <div>
      <Button style={{ color: "white" }} onClick={handleOpen}>
        Add
        <AddIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" style={{ textAlign: "center" }}>
                  Add A New Product
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  value={productData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={2}
                  id="description"
                  label="Description"
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  variant="outlined"
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  variant="outlined"
                  required
                  fullWidth
                  id="stock"
                  label="Stock"
                  name="stock"
                  value={productData.stock}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="brand"
                  label="Brand"
                  name="brand"
                  value={productData.brand}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  value={productData.category}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="thumbnail"
                  label="Thumbnail"
                  name="thumbnail"
                  value={productData.thumbnail}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                style={{
                  margin: "16px 0",
                  borderWidth: "4px",
                }}
                onClick={() => {
                  setProductData({
                    title: "Microsoft Surface 4",
                    description:
                      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
                    price: 1499,
                    discountPercentage: 10.23,
                    rating: 4.43,
                    stock: 68,
                    brand: "Microsoft Surface",
                    category: "laptops",
                    thumbnail:
                      "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
                  });
                }}
              >
                Dummy Data
              </Button>
              <Button
                type="submit"
                variant="contained"
                style={{ margin: "16px 0" }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
