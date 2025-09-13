const express = require('express');
const router = express.Router();

const { addReelController } = require('../controllers/reels/addReelController');
const { getAllReelsController } = require('../controllers/reels/getAllReelsController');
const { getReelByIdController } = require('../controllers/reels/getReelByIdController');

router.post('/addReel', addReelController);
router.get('/allReels', getAllReelsController);
router.get('/reel/:id', getReelByIdController);

module.exports = router;
