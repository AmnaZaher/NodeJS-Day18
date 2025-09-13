const { Reel } = require('../models/Reel');

const getAllReelsController = async (req, res) => {
    try {
        const reels = await Reel.find()
            .populate('author', 'username email') // يرجع بيانات صاحب الريل
            .populate('likes', 'username')        // يرجع مين عامل لايك
            .populate('comments')                 // يرجع الكومنتات
            .sort({ createdAt: -1 });             // الأحدث الأول

        res.status(200).json(reels);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { getAllReelsController };
