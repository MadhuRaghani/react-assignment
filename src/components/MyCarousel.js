import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, Grid, Paper } from "@mui/material";

const images = [
  {
    src: "https://images.unsplash.com/photo-1510878933023-e2e2e3942fb0?q=80&w=1470&h=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1470&h=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=1470&h=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 3",
  },
];

const MyCarousel = () => {
  return (
    <Carousel showThumbs={false}>
      {images.map((image, index) => (
        <Grid key={index} container justifyContent="center" alignItems="center">
          <Card xs={12} sx={{ width: "100%", height: "35rem" }}>
            <Paper elevation={3}>
              <img src={image.src} alt={image.alt} />
            </Paper>
          </Card>
        </Grid>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
