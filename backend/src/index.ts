import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = new Koa();
const PORT = process.env.PORT || 4000; // Use the environment variable PORT or default to 4000

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

connectDB();

app.use(bodyParser());
app.use(json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
