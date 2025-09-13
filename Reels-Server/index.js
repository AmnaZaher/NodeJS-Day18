const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { connectDB } = require('./config/connDB');
const reelsRouter = require('./routes/reelsRoutes');
const { authMiddleware } = require('./middleware/authMiddleware'); // نفس اللي عندك في باقي السيرفرات

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// Auth middleware (يتحقق من التوكن)
app.use(authMiddleware);

// Routes
app.use('/reels', reelsRouter);

// Run server after DB connected
mongoose.connection.once('connected', () => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Reels service running on port ${process.env.PORT || 5000}`);
    });
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});
