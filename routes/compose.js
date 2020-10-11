const express = require("express");
const router = express.Router();
const Post = require("../models/post"); 

router
.route("/")
.get(function(req,res){
  res.render("compose")
})

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
