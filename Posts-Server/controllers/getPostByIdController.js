const {post} = require('../models/Post');

const getPostByIdController = async (req, res) => {
    try {
        const {id} = req.params;
        const foundPost = await post.findById(id);
        if (!foundPost) {
            return res.status(404).json({message: 'Post not found'});
        }
        res.status(200).json(foundPost);
    }catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }
};

module.exports = {getPostByIdController};