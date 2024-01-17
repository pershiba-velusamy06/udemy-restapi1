const express = require('express')
const feedController= require('../controlers/feeds')
const router = express.Router()


router.get('/posts', feedController.getPost)
router.post('/create-post', feedController.createPost)

module.exports=router