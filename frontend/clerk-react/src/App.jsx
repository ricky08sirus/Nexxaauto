import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Privacypolicy from "./pages/Privacypolicy";
import ProductDetails from "./pages/ProductDetails";



import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/product-details" element={<ProductDetails />} />

      </Routes>
       <Footer />
    </>
  );
}

export default App;
