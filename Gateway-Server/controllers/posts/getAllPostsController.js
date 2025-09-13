const { fetchGETREQUEST } = require('../../utils/fetchServer');

const getAllPostsController = async (req, res) => {
    try {
        const data = await fetchGETREQUEST(
            'http://127.0.0.1:4000/posts/allPosts',
            req.session.token
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Gateway error', error: error.message });
    }
};

module.exports = { getAllPostsController };
