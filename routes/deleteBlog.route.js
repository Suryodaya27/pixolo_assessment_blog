const verifyToken = require('../middleware/auth.middleware');

const router = require('express').Router();

const {deleteBlog} = require('../controllers/deleteBlog.controllers')

router.post('/delete', async(req, res) => {
    const {blogId} = req.body;
    try {
        const result = await deleteBlog(blogId);
        res.status(200).send(result);
    }
    catch (error) {
        res.status(error.status || 500 ).send(error.message || "Internal Server Error. Please try again.");
    }
});

module.exports = router;