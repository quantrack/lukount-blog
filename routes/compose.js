const express = require("express");
const router = express.Router();
const Post = require("../models/post"); 


router.get("/", function(req,res){
  res.render("compose");
})

router
.route("/")
.post(function(req,res){

  const post = new Post({

    title: req.body.postTitle,
    subtitle : req.body.postSubtitle,
    content : req.body.postContent,
    writer : req.body.postWriter,

    });

    post.save(function(err){
      if (!err) {
        res.redirect("/");
      }
    })

});

module.exports = router;
