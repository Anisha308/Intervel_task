import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Input,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const rows = [
  {
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    product: "Apple Watch",
    qty: 1,
    price: "$599",
  },
  {
    image: "https://flowbite.com/docs/images/products/imac.png",
    product: 'iMac 27"',
    qty: 1,
    price: "$2499",
  },
  {
    image: "https://flowbite.com/docs/images/products/iphone-12.png",
    product: "iPhone 12",
    qty: 1,
    price: "$999",
  },
];

const ShowProduct = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "100%", overflowX: "auto" }}
    >
      <Table sx={{ minWidth: 60 }}>
        <TableHead>
          <TableRow> <TableCell>
              <Typography variant="body2" color="textSecondary">
               Sl.No
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
Product              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                Purchase Price
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                Sales Price
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
Profit              </Typography>
            </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <img
                  src={row.image}
                  alt={row.product}
                  style={{ width: 64, height: 64, objectFit: "contain" }}
                />
              </TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton color="primary">
                    <RemoveIcon />
                  </IconButton>
                  <Input
                    type="number"
                    value={row.qty}
                    inputProps={{ "aria-label": "quantity" }}
                    style={{ width: 56, textAlign: "center" }}
                  />
                  <IconButton color="primary">
                    <AddIcon />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowProduct;
