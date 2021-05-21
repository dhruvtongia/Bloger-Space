const Blog=require('../models/blogModel');
const Comment=require('../models/commentModel');

// blog_index for all blogs
// blog_details for displaying details of each blog
// blog_create_get for displayng the form
// blog_create_post for posting the form to the server
// blog_delete to delete the blog

const blog_index=(req,res)=>{

    Blog.find().sort({createdAt:-1})// showing in descending oreder ie newest to oldest
    .then((result)=>{
        res.render('index',{title:'index', blogs:result});
    })
    .catch(err=> console.log(err));
}

const blog_details=(req,res)=>{

    //console.log(req);
    const blog_id=req.params.id;
    //console.log(id);
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

const blog_create_get=(req, res) => {
    res.render('create', { title: 'Create a new blog' });
  }

const blog_create_post=(req,res)=>{

    //console.log(req.body);
    const blog=new Blog(req.body);

    blog.save()
    .then((result)=>
    {
        //console.log(result);
        res.redirect('/blogs');
    })
    .catch(err=>console.log(err));

}

const blog_delete=(req,res)=>{

    const id = req.params.id;

    Blog.findByIdAndDelete(id)
      .then(result => {

            // deleting the comments related to that blog
            Comment.deleteMany({blog_id:id}).then(result1=>{
            
                res.json({ redirect: '/blogs' }); // we cant redirect directly for a ajax request;
            })
        
      })
      .catch(err => {
        //console.log(err);
        res.status(404).render('404',{title:'Page not Found'});
      });
};

const blog_update_get=(req,res)=>{

    const id=req.params.id;
   // console.log(id);
    Blog.findById(id)
    .then(result=>{
        //console.log(result);
        res.render('update',{blog:result , title:"edit blog" });
    })
    .catch(err=>{
        //console.log(err);
        res.status(404).render('404',{title:'Page not Found'});
    })
};

const blog_update_post=(req,res)=>{

    
    //console.log(req);
    const id=req.params.id;
    //console.log(id);
    //console.log(req.body);
    Blog.findByIdAndUpdate(id,req.body)
    .then(result=>{
        //console.log(result);
        
        res.redirect('/blogs');
    })
    .catch(err=>{
        //console.log(err);
        res.status(404).render('404',{title:'Page not Found'});
    })
};

module.exports={blog_index,
    blog_details,
    blog_delete,
    blog_create_get,
    blog_create_post,
    blog_update_get,
    blog_update_post
};