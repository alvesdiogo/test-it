// LIBs
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// VIEWs
import { Home } from "../../views/home";
import { Cart } from "../../views/cart";
import { NotFound } from "../../views/notfound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
