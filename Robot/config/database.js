import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config({path: './back/config/.env'})

const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// console.log(process.env.DATABASE_HOST);
// console.log(process.env.DATABASE_USER);
// console.log(process.env.DATABASE_PASSWORD);
// console.log(process.env.DATABASE);
