import React, { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import PrivateRoutes from "./components/PrivateRoutes";
import Footer from "./components/Footer";
const App = () => {
  const [showCart, setshowCart] = useState(false);

  return (
    <div className="">
          <Nav setshowCart={setshowCart} />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PrivateRoutes />}>
            <Route index={true} element={<Home />} />
            <Route
              path="/menu"
              element={<Menu setshowCart={setshowCart} showCart={showCart} />}
            />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
