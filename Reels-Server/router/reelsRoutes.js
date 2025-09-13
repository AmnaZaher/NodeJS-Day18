const express = require('express');
const { addReelController } = require('../controllers/addReelController');
const { getAllReelsController } = require('../controllers/getAllReelsController');
const { getReelByIdController } = require('../controllers/getReelByIdController');

const router = express.Router();


router.post('/', addReelController);
router.get('/', getAllReelsController);
router.get('/:id', getReelByIdController);

module.exports = router;
