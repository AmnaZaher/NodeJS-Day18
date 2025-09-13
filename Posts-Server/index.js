const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { connectDB } = require('./config/connDB');
const postsRouter = require('./router/postsRoutes');
const { checkReq } = require('./middleware/authMiddleware'); // لو عاملين Auth زي باقي السيرفرات

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Use auth middleware (لو عايزه تتحقق من اليوزر)
app.use(checkReq);

// Routes
app.use('/posts', postsRouter);

// Start server after DB connected
mongoose.connection.once('connected', () => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Posts service running on port ${process.env.PORT || 4000}`);
    });
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});
