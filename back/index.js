import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";

// import mysql from 'mysql';

//init express
const app = express();

app.use(express.json());

app.use(cors());

app.use(Router);

const port = 3991;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

//.env path check
// console.log('Pass info:');
// console.log(process.env.DATABASE_HOST);
// console.log(process.env.DATABASE_USER);
// console.log(process.env.DATABASE);
// console.log(process.env.DATABASE_PASSWORD);