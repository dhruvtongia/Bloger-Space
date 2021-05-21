const express=require('express');
const commentController=require('../controllers/commentController');

const router=express.Router();

router.post('/blogs/:blog_id/comment',commentController.comment_post);

module.exports=router;