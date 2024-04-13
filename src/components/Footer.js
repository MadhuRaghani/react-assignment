import React from "react";
import { Typography, Link, Container, AppBar, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ marginBlockStart: 0.5 }}>
      <Toolbar>
        <Container maxWidth="md">
          <Typography variant="body1" color="inherit">
            © {new Date().getFullYear()} Shopify
          </Typography>
          <Typography variant="body2" color="inherit">
            Made with ❤️ by{" "}
            <Link color="inherit" href="">
              Madhu
            </Link>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
