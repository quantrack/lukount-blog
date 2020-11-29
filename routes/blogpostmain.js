const express = require("express");
const router = express.Router();


router
.route("/")
.get(function(req, res){
  
      res.render("blogpostmain",{title: "Lukount : una empresa creada durante la pandemia"});
});

module.exports = router;
