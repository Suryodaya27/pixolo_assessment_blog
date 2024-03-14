const verifyToken = require('../middleware/auth.middleware');

const router = require('express').Router();

const {saveBlogToDatabase} = require('../controllers/saveBlogToDb.controllers')

router.post('/create', verifyToken, async(req, res) => {
    const userId = req.userId;
    const {title, content} = req.body;
    try {
        const result = await saveBlogToDatabase(userId, title, content);
        res.status(201).send(result);
    }
    catch (error) {
        res.status(error.status || 500 ).send(error.message || "Internal Server Error. Please try again.");
    }
});

module.exports = router;