const { fetchGETREQUEST } = require('../../utils/fetchServer');

const getAllReelsController = async (req, res) => {
    try {
        const data = await fetchGETREQUEST(
            'http://127.0.0.1:5000/reels/allReels',
            req.session.token
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Gateway error', error: error.message });
    }
};

module.exports = { getAllReelsController };
