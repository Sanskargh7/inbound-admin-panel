import express from 'express';
// import db from './config/db.js';
import dotenv from 'dotenv';
import connection from './config/db.js';

const app = express();
dotenv.config()
const port = process.env.PORT || 9000
connection()
app.listen(port, () => {
    console.log(`server is started on ${port}`)
})
