import { useState } from "react";
import { useAddProductMutation } from "../api/apiSlice.js"; // Adjust the import path as needed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import React  from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { Navigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    name: "",
    purchase_price: "",
    sales_price: "",
    profit: "",
  });
  const [addProduct, { isLoading, isError, isSuccess, error }] =
    useAddProductMutation();

  const handleChange = (e) => {
    console.log("kkkdkdlkkdjwsdkkwd");

    const { name, value } = e.target;
    console.log(name, value, "dtaa");

    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [name]: value,
      };

      // Recalculate profit whenever purchasePrice or salesPrice changes
      if (name === "purchase_price" || name === "sales_price") {
        const profit =
          updatedFormData.sales_price - updatedFormData.purchase_price;
        updatedFormData.profit = isNaN(profit) ? "" : profit.toFixed(2); // Format to 2 decimal places
      }

      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the mutation function with form data
      const response = await addProduct(formData).unwrap();
      // Handle success
      toast.success(response.message);
      // Optionally, clear the form
      setFormData({
        name: "",
        purchase_price: "",
        sales_price: "",
        profit: "",
      });
      navigate("/"); // Navigate to /addProduct
    } catch (err) {
      // Handle errors
      console.error("Failed to add product:", err);
      toast.error(err.data.message);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add Product
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="productName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="number" // Ensure numeric input
            id="purchase_price"
            label="Purchase Price"
            name="purchase_price"
            value={formData.purchase_price}
            onChange={handleChange}
            autoComplete="purchasePrice"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="sales_price"
            label="sales Price"
            type="number" // Ensure numeric input
            name="sales_price"
            value={formData.sales_price}
            onChange={handleChange}
            autoComplete="salesPrice"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="profit"
            label="Profit"
            name="profit"
            value={formData.sales_price - formData.purchase_price}
            onChange={handleChange}
            autoComplete="profit"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            ADD PRoduct
          </Button>
        </Box>
      </Paper>
      <ToastContainer />
    </Container>
  );
}

export default AddProduct;
