const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const moment = require ("moment") ;
const _ = require ("lodash");

router
.route("/:postName")
.get(function(req, res){

  const requestedTitle = req.params.postName;

    Post.findOne({title: requestedTitle}, function(err, post){

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
