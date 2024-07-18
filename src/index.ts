// Imports
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Dotenv setup
dotenv.config();

// App Setup
const app: Express = express();
const port = process.env.PORT || 5000

// Example Route
app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript")
});

// Start app
app.listen(port, () => {
  console.log(`Express Server is running at http://localhost:${port}`);
});