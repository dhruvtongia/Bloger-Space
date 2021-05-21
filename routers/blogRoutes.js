const express=require('express');
const blogController=require('../controllers/blogController');


const router=express.Router();

router.get('/blogs',blogController.blog_index);

router.get('/blogs/add',blogController.blog_create_get);

router.post('/blogs',blogController.blog_create_post);

router.get('/blogs/:id',blogController.blog_details);

router.delete('/blogs/:id',blogController.blog_delete);

router.get('/blogs/edit/:id',blogController.blog_update_get);

router.post('/blogs/edit/:id',blogController.blog_update_post);

module.exports=router;