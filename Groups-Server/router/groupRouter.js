const express = require('express')
const router = express.Router()
const { addPost } = require('../controllers/addPostController')
const { getGroupById } = require('../controllers/getGroupByIdController')
const { createGroup } = require('../controllers/createGroupController')

router.post('/addPost', addPost)
router.get('/group/:id', getGroupById)
router.post('/createGroup', createGroup)

module.exports = router