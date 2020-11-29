const express = require("express");
const router = express.Router();
const Post = require("../models/post"); 


router
.route("/")
.get(function(req,res){
    Post.find({}, function(err, posts){
        res.render("bloghome", {
          posts: posts,
          title: "Lukount Blog"
          });
      });
    }); 



module.exports = router;
