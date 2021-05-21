const mongoose=require('mongoose');

const commentSchema=mongoose.Schema({

    blog_id:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }



},{timestamps:true});

const Comment=mongoose.model('comment',commentSchema);

module.exports=Comment;
