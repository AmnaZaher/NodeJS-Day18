const {Post} = require('../models/Post');

const createPostController = async (req, res) => {
    try {
        const { content} = req.body;
        if (!content) {
            return res.status(400).json({error: ' content is required'});
        }
        const newPost = await Post.create({title, content, author: req.user.id});

        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = {createPostController};