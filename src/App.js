import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>NOT FOUND!!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
