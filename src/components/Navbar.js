import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AddModal from "./AddModal";
import SearchIcon from "@mui/icons-material/Search";
import { ProductContext } from "../contexts/ProductContext";
import { searchProducts } from "../services/ProductServices";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSearchQuery, setProducts, searchQuery } =
    useContext(ProductContext);

  return (
    <AppBar position="static" color="primary" sx={{ marginBlockEnd: 0.5 }}>
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          Shopify
        </Typography>
        <TextField
          sx={{ flexGrow: 1, padding: "2px", input: { color: "white" } }}
          style={{
            margin: "5px 20px 5px 32px",
            border: "2px solid white",
            color: "white",
          }}
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  style={{ color: "white", marginInlineStart: "5px" }}
                />
              </InputAdornment>
            ),
          }}
          variant="standard"
          onChange={(e) => {
            location.pathname !== "/products" && navigate("/products");
            setSearchQuery(e.target.value);
            searchProducts(searchQuery, setProducts);
          }}
        />

        <ButtonGroup variant="text">
          <Button
            color="inherit"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </Button>
          <AddModal />
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
