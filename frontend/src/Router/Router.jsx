import React from 'react'
import { Routes, Route } from "react-router-dom";
import AddProduct from '../Components/AddProduct';
import ShowProduct from '../Components/ShowProduct'
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/" element={<ShowProduct/>} />
      </Routes>
    </div>
  );
}

export default Router
