const express = require('express')
const router = express.Router()
const { addPost } = require('../../Groups-Server/controllers/addPostController')
const { getGroupById } = require('../../Groups-Server/controllers/getGroupByIdController')
const { createGroup } = require('../../Groups-Server/controllers/createGroupController')

router.post('/addPost', addPost)
router.get('/group/:id', getGroupById)
router.post('/createGroup', createGroup)

module.exports = router