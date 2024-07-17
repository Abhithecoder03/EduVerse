const express = require('express');
const router = express.Router();
const blogController = require('../../controllers/Blog/Blog');

// Route to create a new blog
router.post('/new-blog', blogController.createBlog);

// Route to fetch all blogs
router.get('/all-blogs', blogController.getAllBlogs);

// Route to fetch a single blog by ID
router.get('/blog/:id', blogController.getBlogById);

module.exports = router;
