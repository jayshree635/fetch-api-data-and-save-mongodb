const route = require('express').Router();
const post = require('../controller/posts.controller');

route.get('/all-post',post.allPost)

module.exports = route