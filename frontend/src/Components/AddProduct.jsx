import { useState } from "react";
import React  from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";

function AddProduct() {
    const [formData, setFormData] = useState({
        productName: "",
        purchasePrice: "",
        salesPrice: "",
        profit:"",
    })

    const handleChange = (e) => {
        console.log('kkkdkdlkkdjwsdkkwd');
        
      const { name, value } = e.target;
console.log(name,value,'dtaa');

        setFormData((prevFormData) => {
          const updatedFormData = {
            ...prevFormData,
            [name]: value,
          };

          // Recalculate profit whenever purchasePrice or salesPrice changes
          if (name === "purchasePrice" || name === "salesPrice") {
            const profit =
              updatedFormData.salesPrice - updatedFormData.purchasePrice;
            updatedFormData.profit = isNaN(profit) ? "" : profit;
          }

          return updatedFormData;
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
        console.log('submtted');
        

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
            id="productName"
            label="Product Name"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            autoComplete="productName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="purchasePrice"
            label="Purchase Price"
            name="purchasePrice"
            value={formData.purchasePrice}
            onChange={handleChange}
            autoComplete="purchasePrice"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="salesPrice"
            label="sales Price"
            name="salesPrice"
            value={formData.salesPrice}
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
            value={formData.salesPrice - formData.purchasePrice}
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
    </Container>
  );
}

export default AddProduct;
