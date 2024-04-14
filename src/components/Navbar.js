import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // const [searchQuery, setSearchQuery] = useState("");

  // console.log(this.props.navigation.state.routeName);

  return (
    <AppBar position="static" color="primary" sx={{ marginBlockEnd: 0.5 }}>
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          Shopify
        </Typography>

        <ButtonGroup variant="text" aria-label="Basic button group">
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
          {/* TODO: OnClick of Add A Product*/}
          <Button color="inherit">Add</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
