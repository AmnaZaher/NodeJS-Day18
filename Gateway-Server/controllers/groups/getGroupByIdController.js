const { fetchGETREQUEST } = require('../../utils/fetchServer');

const getGroupByIdController = async (req, res) => {
    try {
        const data = await fetchGETREQUEST(
            `http://127.0.0.1:4000/groups/group/${req.params.id}`,
            req.session.token
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Gateway error', error: error.message });
    }
};

module.exports = { getGroupByIdController };
