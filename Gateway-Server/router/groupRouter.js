const express = require('express');
const router = express.Router();

const { createGroupController } = require('../controllers/groups/createGroupController');
const { addPostController } = require('../controllers/groups/addPostController');
const { getGroupByIdController } = require('../controllers/groups/getGroupByIdController');


router.post('/createGroup', createGroupController);
router.post('/addPost', addPostController);
router.get('/group/:id', getGroupByIdController);

module.exports = router;
