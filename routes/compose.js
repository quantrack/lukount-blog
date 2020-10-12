const express = require("express");
const router = express.Router();
const Post = require("../models/post"); 

router
.route("/")
.post(function(req,res){

  const post = new Post({

    title: req.body.postTitle,
    content : req.body.postContent,

    });

    post.save(function(err){
      if (!err) {
        res.redirect("/");
      }
    })

});

module.exports = router;
