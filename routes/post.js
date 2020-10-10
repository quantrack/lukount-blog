const express = require("express");
const router = express.Router();
const Post = require("../models/post"); 
const { route } = require("./compose");

router.
route("/post")
.get(function(req,res){
    res.render("blogpost", {postTitle:postTitle, postContent:postContent})
  });
  
  
  router.
  route("/post/:postId")
  .get(function(req, res){
  
    const requestedPostId = req.params.postId;
    
      Post.findOne({_id: requestedPostId}, function(err, post){
        res.render("blogpost", {
          title: post.title,
          content: post.content
        });
      });
    
    });



module.exports = router;