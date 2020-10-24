require('dotenv').config()
const express = require ("express");
const app = express();
const ejs = require ("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.static('public/uploads'));


// Routing
const router = express.Router();
const compose = require ("./routes/compose");
app.use("/compose", compose);

const bloghome = require ("./routes/bloghome")
app.use("/", bloghome);

const blogpost = require ("./routes/blogpost")
app.use("/post", blogpost);


// -------------Database----------
mongoose.connect("mongodb://localhost:27017/lukountblogDB", {useNewUrlParser: true,useUnifiedTopology:true});
const Post = require("./models/post"); 
const User = require("./models/user");

// ---------------------------------


  app
  .route("/register")
  .get(function(req,res){
    res.render("register");
  })
  .post(function(req,res){
    bcrypt.hash(req.body.password,saltRounds,  function(err,hash){
      const newUser = new User({

      name : req.body.name, 
      email : req.body.username,
      password: hash
      });
    
      newUser.save(function(err){
        if (!err) {
          res.render("compose");
        }else {
          console.log(err);
        }
      });
    });
  })

  
  
  app
  .route("/login")
  .get(function(req,res){
    res.render("login");
  })

  .post(function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    User.findOne({email: username}, function(err,foundUser){
      if (err) {
        console.log(err);
      }else {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password, function(err, result){
    if (result === true) {
      res.render("compose")
    }
          })
    
        }
      }
    });
    
    });
    











//------------
app.listen(3000, function(){
  console.log("Server started on port 3000!");
})
//-----------
