const express = require("express");
const router = express.Router();
const Post = require("../models/post"); 
// ------MULTER PARAMETERS FOR IMAGE UPLOAD------
const multer  = require('multer')
const path = require ('path');

const storage = multer.diskStorage({ 

  destination: function(req,file, cb){
    cb(null, './public/uploads');
  },
  filename: function(req, file, cb){
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ 
  storage: storage,
  })
// ----------------------------



router.get("/", function(req,res){
  res.render("login", {title: "Login"});
})

router
.route("/")
.post(upload.single('myImage'),function(req,res){

  const post = new Post({

    image: req.file.filename,
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
