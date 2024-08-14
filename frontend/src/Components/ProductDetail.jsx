import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../api/apiSlice"; // Adjust the path as necessary
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: "auto",
  maxWidth: 600,
  backgroundColor: theme.palette.background.default,
}));

export default function ProductDetail() {
  const { id } = useParams(); // Get product_id from URL params
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6" color="error">
          Error fetching product details.
        </Typography>
      </Box>
    );
  }

  if (!product) {
    return null; // Or a fallback UI if product is null
  }

  return (
    <StyledPaper>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        sx={{ marginBottom: 3 }}
      >
        Product Detail
      </Typography>

      <Box
        sx={{
          borderBottom: "1px solid #e0e0e0", // Underline after each detail
          paddingBottom: 2,
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1">
          <strong>Product Name:</strong>
        </Typography>
        <Typography variant="body1">{product.name}</Typography>
      </Box>

      <Box
        sx={{
          borderBottom: "1px solid #e0e0e0",
          paddingBottom: 1,
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1">
          <strong>Product ID:</strong>
        </Typography>
        <Typography variant="body1">{product.product_id}</Typography>
      </Box>

      <Box
        sx={{
          borderBottom: "1px solid #e0e0e0",
          paddingBottom: 1,
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1">
          <strong>Purchase Price:</strong>
        </Typography>
        <Typography variant="body1">₹{product.purchase_price}</Typography>
      </Box>

      <Box
        sx={{
          borderBottom: "1px solid #e0e0e0",
          paddingBottom: 1,
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1">
          <strong>Sales Price:</strong>
        </Typography>
        <Typography variant="body1">₹{product.sales_price}</Typography>
      </Box>

      <Box
        sx={{
          borderBottom: "1px solid #e0e0e0",
          paddingBottom: 1,
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1">
          <strong>Profit:</strong>
        </Typography>
        <Typography variant="body1">₹{product.profit}</Typography>
      </Box>

      <Box
        sx={{
          borderBottom: "1px solid #e0e0e0",
          paddingBottom: 1,
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1">
          <strong>Created At:</strong>
        </Typography>
        <Typography variant="body1">
          {new Date(product.createdAt).toLocaleString()}
        </Typography>
      </Box>
    </StyledPaper>
  );
}
