const express = require('express')
const router = express.Router()
const { createPostController } = require('../controllers/createPostController');
const { getAllPostsController } = require('../controllers/getAllPostsController');
const { getPostByIdController } = require('../controllers/getPostByIdController');


// Create a new post
router.post('/', createPostController);

// Get all posts
router.get('/', getAllPostsController);

// Get post by ID
router.get('/:id', getPostByIdController);

module.exports = router;
