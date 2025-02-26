import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import todoRoutes from './routes/api/todoRoute';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://passion_777:passion_777@jack.fv2ru.mongodb.net/?retryWrites=true&w=majority&appName=Jack"

// Middleware
app.use(cors({
    origin: 'https://scriptblox-gules.vercel.app', // Replace with your frontend's URL
    credentials: true
  }));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// MongoDB Connection
mongoose.connect(MONGO_URI! as string)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// use Route
app.use('/tasks', todoRoutes);


// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Catchall handler for any request that doesn't match above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});