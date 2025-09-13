const { fetchGETREQUEST } = require('../../utils/fetchServer');

const getReelByIdController = async (req, res) => {
    try {
        const data = await fetchGETREQUEST(
            `http://127.0.0.1:5000/reels/reel/${req.params.id}`,
            req.session.token
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Gateway error', error: error.message });
    }
};

module.exports = { getReelByIdController };
