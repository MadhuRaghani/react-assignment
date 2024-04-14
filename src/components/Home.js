import React from "react";
import MyCarousel from "./MyCarousel";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box style={{ flexGrow: 1 }}>
      <MyCarousel />
    </Box>
  );
}

export default Home;
