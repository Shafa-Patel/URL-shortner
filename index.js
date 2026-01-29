import express from 'express';
import "dotenv/config"
import connectToDatabase from './config/db.js';
import urlRouter from './routes/URL.js';
import { redirectToOriginalURL } from './controlers/URL.js';

const app=express();
const PORT=process.env.PORT 

connectToDatabase()

app.use(express.json())

// API routes
app.use("/api/URL",urlRouter)
app.get("/:shortID",redirectToOriginalURL)

app.listen(PORT,()=> console.log(`Server is running on port ${PORT}` ))