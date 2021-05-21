// comment_post
const Blog=require('../models/blogModel');
const Comment=require('../models/commentModel');

const comment_post=(req,res)=>{

    const blog_id=req.params.blog_id;

    const comment = {};
    comment.blog_id=blog_id;
    comment.username=req.body.username;
    comment.message=req.body.message;
    const newComment= new Comment(comment);
    
    // saving the new comment
    newComment.save();

   Blog.findById(blog_id)
   .then((blog)=>{

        Comment.find({blog_id})
        .then((result)=>{
            res.render('details',{title:blog_id,comments:result,blog});
        })
        .catch(err=>{
            //console.log(err);
            res.status(404).render('404',{title:'Page not Found'});
        })

   })
   .catch(err=>{
    //console.log(err);
    res.status(404).render('404',{title:'Page not Found'});
})
    
}

module.exports={comment_post};