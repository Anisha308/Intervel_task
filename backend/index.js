import express from 'express';
import cookieParser from "cookie-parser";
import sequelize from './config/dbsql.js'; // Sequelize instance

import dotenv from 'dotenv'
dotenv.config()
import pgClient from "./config/dbpg.js";
import Router from './Routes/ProductRoutes.js'
import Product from './Models/MysqlModal.js'; // Import the Product model

const app = express(); // Initialize express app

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/", Router);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to MySQL via Sequelize!");

    // Synchronize the model with the database
    return Product.sync({ alter: true });
  })
  .then(() => {
    console.log("Products table has been synchronized.");
  })
  .catch((err) => {
    console.error("Error connecting to MySQL:", err.message);
  });



// Connect to PostgreSQL
pgClient
  .authenticate()
  .then(() => {
    console.log("Connected to PostgreSQL via Sequelize!");
  
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err.message);
  });


const PORT = process.env.PORT || 7007;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})