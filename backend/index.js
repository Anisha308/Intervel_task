import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import connection from './config/dbsql.js'
import pgClient from "./config/dbpg.js";
pgClient
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL!");
    // Optionally, you can perform a query here if needed
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err.message);
  });

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});
const app = express()

const PORT = process.env.PORT || 7007;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})