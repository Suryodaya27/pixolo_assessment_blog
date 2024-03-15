const verifyToken = require('../middleware/auth.middleware');

const router = require('express').Router();

const {updateContent} = require('../controllers/updateContent.controllers')

router.put('/updateContent', verifyToken, async(req, res) => {
    const {blogId,content} = req.body;
    try {
        const result = await updateContent(blogId,content);
        res.status(201).send(result);
    }
    catch (error) {
        res.status(error.status || 500 ).send(error.message || "Internal Server Error. Please try again.");
    }
});

module.exports = router;