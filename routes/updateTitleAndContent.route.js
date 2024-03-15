const verifyToken = require('../middleware/auth.middleware');

const router = require('express').Router();

const {updateTitleAndContent} = require('../controllers/updateTitleAndContent.controllers')

router.put('/updateTitleAndContent', verifyToken, async(req, res) => {
    const {blogId,title,content} = req.body;
    try {
        const result = await updateTitleAndContent(blogId,title,content);
        res.status(200).send(result);
    }
    catch (error) {
        res.status(error.status || 500 ).send(error.message || "Internal Server Error. Please try again.");
    }
});

module.exports = router;