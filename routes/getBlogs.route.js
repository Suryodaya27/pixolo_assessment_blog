const verifyToken = require('../middleware/auth.middleware');

const router = require('express').Router();

const {getBlogs} = require('../controllers/getBlogs.controllers')

router.get('/blogs', verifyToken, async(req, res) => {
    const userId = req.userId;
    try {
        const result = await getBlogs(userId);
        res.status(200).send(result);
    }
    catch (error) {
        res.status(error.status || 500 ).send(error.message || "Internal Server Error. Please try again.");
    }
});

module.exports = router;