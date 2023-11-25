import express, { Router } from 'express';
import mysql from 'mysql';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

dotenv.config({path: 'C:/Users/js295/Desktop/cenradis_1/back/.env'});//adujust path

const app = express();

app.use(express.json());

app.use(cors());

app.use(Router());
// MySQL connection
const database = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

// Connect to the database
database.connect((error) => {
  if (error) {
    console.log('Error connecting to the database:',error);
  } else {
    console.log('Connected to the database...');
  }
});

//Server mounting
const distDirectory = path.join('C:/Users/js295/Desktop/cenradis_1/front/dist/');//adujust path
app.use(express.static(distDirectory));

//Port corecting
const port = process.env.PORT || 3991;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});



//loging variables witch couse PROBLEMS!!!!!
console.log(process.env.DATABASE_USER);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE_HOST);
console.log(process.env.DATABASE);
console.log(__dirname);




/*To do:
+fix:
+Login function 
+Sign up
*/

/*To know!!
After every change in code run: npm run build
*/