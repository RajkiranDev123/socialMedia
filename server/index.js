import dotenv from "dotenv";
import express from "express";
import {databaseConnection} from "./config/database.js"
dotenv.config({
  path: ".env",
});
const app = express();
const PORT = process.env.PORT;

databaseConnection()

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
