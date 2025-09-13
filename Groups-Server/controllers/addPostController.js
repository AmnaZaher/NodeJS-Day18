const Post = require('../models/Post');
const addPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const username = req.session.username; // Assuming username is stored in session
        if (!username) {
            return res.status(401).json({ message: 'Unauthorized: You must be logged in' });
        }
        const newPost = new Post({ title, content, username });
        await newPost.save();
        res.status(201).json({ message: 'Post added successfully by ${req.session.username}', Post: newPost });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}




module.exports = {addPost};
