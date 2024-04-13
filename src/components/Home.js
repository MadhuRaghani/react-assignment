import React from "react";
import MyCarousel from "./MyCarousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box>
      <Navbar />
      <MyCarousel />
      <Footer />
    </Box>
  );
}

export default Home;
