const express = require('express');
const router = express.Router();

const { createPostController } = require('../controllers/posts/createPostController');
const { getAllPostsController } = require('../controllers/posts/getAllPostsController');
const { getPostByIdController } = require('../controllers/posts/getPostByIdController');

router.post('/createPost', createPostController);
router.get('/allPosts', getAllPostsController);
router.get('/post/:id', getPostByIdController);

module.exports = router;
