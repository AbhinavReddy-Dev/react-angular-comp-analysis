import React from "react";
import Index from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Ecommerce from "./pages/ecommerce";
import SocialMedia from "./pages/socialmedia";
import ProductPage from "./pages/ecommerce/[id]";
function App() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
      <Route path="/ecommerce/:id" element={<ProductPage />} />
      <Route path="/socialmedia" element={<SocialMedia />} />
    </Routes>
  );
}

export default App;
