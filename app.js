require('dotenv').config()
const express = require ("express");
const app = express();
const ejs = require ("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routing
const router = express.Router();
const compose = require ("./routes/compose");
app.use("/compose", compose);

const bloghome = require ("./routes/bloghome")
app.use("/", bloghome);



// -------------Database----------
mongoose.connect("mongodb://localhost:27017/lukountblogDB", {useNewUrlParser: true,useUnifiedTopology:true});
const Post = require("./models/post"); 

// ---------------------------------



app.route("/post/:postId")
.get(function(req, res){

  const requestedPostId = req.params.postId;
  
    Post.findOne({_id: requestedPostId}, function(err, post){
      res.render("blogpost", {
        title: post.title,
        content: post.content
      });
    });
  
  });

//------------
app.listen(3000, function(){
  console.log("Server started on port 3000!");
})
//-----------
