const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const moment = require ("moment") ;


router
.route("/:postId")
.get(function(req, res){

  const requestedPostId = req.params.postId;

    Post.findOne({_id: requestedPostId}, function(err, post){

      res.render("blogpost", {
        image: post.image,
        title: post.title,
        content: post.content,
        writer: post.writer,
        date: moment(post.createdAt).format('DD/MM/YYYY'),
    
      });
    });
  
  });


module.exports = router;
