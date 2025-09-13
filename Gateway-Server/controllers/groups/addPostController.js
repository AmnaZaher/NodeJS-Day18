const { fetchPOSTREQUEST } = require('../../utils/fetchServer');

const addPostController = async (req, res) => {
    try {
        const data = await fetchPOSTREQUEST(
            'http://127.0.0.1:4000/groups/addPost',
            req.body,
            req.session.token
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Gateway error', error: error.message });
    }
};

module.exports = { addPostController };
