const { Reel } = require('../models/Reel');

const getReelByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const reel = await Reel.findById(id)
            .populate('author', 'username email') // يجيب بيانات البوست بتاع مين
            .populate('likes', 'username')        // يجيب مين عمل لايك
            .populate('comments');                // يجيب الكومنتات

        if (!reel) {
            return res.status(404).json({ message: 'Reel not found' });
        }

        res.status(200).json(reel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { getReelByIdController };
