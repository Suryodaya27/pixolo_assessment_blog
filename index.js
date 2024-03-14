const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
const app = express()

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const createBlog = require('./routes/createBlog.route');
const deleteBlog = require('./routes/deleteBlog.route');
const updateTitle = require('./routes/updateTitle.route');
const updateContent = require('./routes/updateContent.route');
const updateTitleAndContent = require('./routes/updateTitleAndContent.route');
const getBlogs = require('./routes/getBlogs.route');

app.use('/api', createBlog);
app.use('/api', deleteBlog);
app.use('/api', updateTitle);
app.use('/api', updateContent);
app.use('/api', updateTitleAndContent);
app.use('/api', getBlogs);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})