const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    posts: [{   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Members'
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Group', groupSchema);
