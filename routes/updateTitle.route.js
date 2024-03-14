const verifyToken = require('../middleware/auth.middleware');

const router = require('express').Router();

const {updateTitle} = require('../controllers/updateTitle.controllers')

router.post('/updateTitle', verifyToken, async(req, res) => {
    const {blogId,title} = req.body;
    try {
        const result = await updateTitle(blogId,title);
        res.status(201).send(result);
    }
    catch (error) {
        res.status(error.status || 500 ).send(error.message || "Internal Server Error. Please try again.");
    }
});

module.exports = router;