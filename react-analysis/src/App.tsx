import React from "react";
import Index from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Ecommerce from "./pages/ecommerce";
import FormInput from "./pages/forminput";
import ProductPage from "./pages/ecommerce/[id]";
function App() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
      <Route path="/ecommerce/:id" element={<ProductPage />} />
      <Route path="/forminput" element={<FormInput />} />
    </Routes>
  );
}

export default App;
