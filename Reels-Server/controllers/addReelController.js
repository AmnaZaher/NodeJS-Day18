const {Reel} = require('../models/Reel')

const addReelController = async (req, res) => {
    try {
        const { videoUrl, caption } = req.body;

        if (!videoUrl) {
            return res.status(400).json({ error: 'videoUrl is required' });
        }

        const newReel = await Reel.create({
            videoUrl,
            caption,
            author: req.user.id // من التوكن
        });

        res.status(201).json(newReel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addReelController };