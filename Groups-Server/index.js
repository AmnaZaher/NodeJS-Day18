const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { connectDB } = require('./config/connDB');
const groupsRouter = require('./router/groupRouter');
const {authMiddleware} = require('./middleware/authMiddleware')

const app = express();
app.use(express.json());
app.use(cors());



connectDB();



app.use(authMiddleware)
app.use('/groups', groupsRouter)




mongoose.connection.once('connected', () => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
        console.log('Server started on port 3000');
    });
});

mongoose.connection.on('error', err => {
    console.log(err);
});