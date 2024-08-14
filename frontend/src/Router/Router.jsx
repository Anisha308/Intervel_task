import React from 'react'
import { Routes, Route } from "react-router-dom";
import AddProduct from '../Components/AddProduct';
import AllProducts from '../Components/AllProducts.jsx'
import ProductDetail from '../Components/ProductDetail';
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default Router
