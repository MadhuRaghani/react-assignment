import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductListing from "./components/ProductListing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#704264",
//       // light: "#f5d0fe",
//     },
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </div>
    // </ThemeProvider>
  );
}

export default App;
