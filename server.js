const express=require('express');
const mongoose=require('mongoose');
const blogRoutes=require('./routers/blogRoutes');
const commentRoutes=require('./routers/commentRoutes');
require('dotenv').config();

const PORT=process.env.PORT ||3000;
// createing express app
const app=express();

// connecting to the mongodb 
mongoose.connect(process.env.URIdb,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(result=>{

        app.listen(PORT);
    })
    .catch(err=>{
        console.log(err);
    })

mongoose.set('useFindAndModify', false);

// setting the view engine
app.set('view engine','ejs');

// statics and middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//--------basic routes-----------//
app.get('/',(req,res)=>{

    res.redirect('blogs');
})
app.get('/about',(req,res)=>{

    res.render('about',{title:'about'});
})

//------------- All  routes-----------// 
app.use(blogRoutes);
app.use(commentRoutes);

app.use((req,res)=>{
    res.status(404).render('404',{title:'Page not Found'});
})
