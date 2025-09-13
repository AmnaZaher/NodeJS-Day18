const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
    videoUrl: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        default: ''
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comments'
    }]
}, {
    timestamps: true
});

const Reel = mongoose.model('Reel', reelSchema);
module.exports = { Reel };
