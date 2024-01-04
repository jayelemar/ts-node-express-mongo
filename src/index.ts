import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/connectDB';

dotenv.config();


const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(
    cors({
        origin: ["http://localhost:5173", "https://example.com"],
        credentials: true
    })
);

app.get("/", (req, res) => {
  res.send("Home Page")
})

connectDB();
const port = process.env.PORT ?? 8000;



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
