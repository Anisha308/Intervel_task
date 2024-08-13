import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import connection from './config/dbsql.js'
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});const app = express()

const PORT = process.env.PORT || 7007;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})