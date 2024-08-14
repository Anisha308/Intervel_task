import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import Button from "@mui/material/Button"; // Import Button from Material-UI
import { useGetAllProductsQuery } from "../api/apiSlice.js"; // Adjust the path as necessary

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // Style for table headers
  "&.MuiTableCell-head": {
    backgroundColor: "#cfcacb", // Gray background color
    color: theme.palette.text.primary,
    fontWeight: "bold", // Bold font for table headers
  },
  // Style for table body cells
  "&.MuiTableCell-body": {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ShowProduct() {
  const navigate = useNavigate(); // Initialize useNavigate

  const { data: productsData, error, isLoading } = useGetAllProductsQuery();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (isLoading) {
          console.log("Loading products...");
          return;
        }

        if (error) {
          throw new Error("Error fetching products");
        }

        if (productsData) {
          setProducts(productsData);
          console.log("Fetched products:", productsData);
        }
      } catch (error) {
        console.error("Error displaying products:", error);
      }
    };

    fetchProducts();
  }, [isLoading, error, productsData]);

  const handleAddProductClick = () => {
    navigate("/addProduct"); // Navigate to /addProduct
  };

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div className="bg-white p-2 mt-4 rounded-md w-full">
      <div className="flex items-center justify-between mt-9 pb-2">
        {/* Title on the left */}
        <h2 className="text-black-600 font-semibold">
          Product Lists{" "}
          <div className="flex items-end ml-7">
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProductClick}
            >
              Add Product
            </Button>
          </div>
        </h2>

        {/* Add Product button on the right */}
      </div>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Sl.No</StyledTableCell>
                  <StyledTableCell>Product ID</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Purchase Price</StyledTableCell>
                  <StyledTableCell>Sales Price</StyledTableCell>
                  <StyledTableCell>Profit</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <StyledTableRow key={product.product_id}>
                    <StyledTableCell>{index + 1}</StyledTableCell>
                    <StyledTableCell>{product.product_id}</StyledTableCell>
                    <StyledTableCell>{product.name}</StyledTableCell>
                    <StyledTableCell>{product.purchase_price}</StyledTableCell>
                    <StyledTableCell>{product.sales_price}</StyledTableCell>
                    <StyledTableCell>{product.profit}</StyledTableCell>

                    <StyledTableCell>
                      <a
                        href={`/product/${product.product_id}`} // Link to product details page
                        className="text-blue-500 hover:underline"
                      >
                        View
                      </a>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
