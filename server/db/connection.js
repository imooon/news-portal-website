// This page is for setting up the connection/db name

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI, {
        });
        // Message indicating a successful connection
        console.log('MongoDB connected to portal database');
    } catch (error) {
        // Message for error in connection
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;