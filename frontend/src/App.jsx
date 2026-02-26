import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CustomPhone from "./pages/CustomPhone";
import PhoneModels from "./components/PhoneModels";
import CustomePhonePage from "./pages/CustomePhonePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Sidebar from "./components/SideBar";
import CoupleMobileCases from "./pages/CoupleMobileCases";
import ProductDetails from "./pages/ProductDetails";
import MagSafePhone from "./pages/MagSafePhone";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-phone-cases" element={<CustomPhone />} />
        <Route path="/category/:model" element={<PhoneModels />} />
        <Route
          path="/category/custom/:model/:cases"
          element={<CustomePhonePage />}
        />
        <Route path="/couple-mobile-cases" element={<CoupleMobileCases />} />
        <Route path="/magsafe-iphone" element={<MagSafePhone />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
