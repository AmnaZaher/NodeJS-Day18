const { fetchPOSTREQUEST } = require('../../utils/fetchServer');

const addReelController = async (req, res) => {
    try {
        const data = await fetchPOSTREQUEST(
            'http://127.0.0.1:5000/reels/addReel',
            req.body,
            req.session.token
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Gateway error', error: error.message });
    }
};

module.exports = { addReelController };
