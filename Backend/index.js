import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3000;

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;
try {
    
} catch (error) {
    
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
