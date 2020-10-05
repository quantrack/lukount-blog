const express = require ("express");
const app = express();
const ejs = require ("ejs");
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const homestartingcontent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus dolor eget nunc condimentum, ut tristique risus luctus. Praesent pulvinar vulputate tellus nec vulputate. In condimentum ex vitae tellus mollis faucibus. Nulla dictum scelerisque sapien quis vehicula. Ut est urna, venenatis at consectetur a, mattis quis sem. Maecenas feugiat, lacus quis condimentum porta, diam enim dapibus nulla, sit amet consectetur sapien nibh eget libero. Phasellus volutpat auctor diam sit amet dictum. Vivamus aliquam tortor quis augue ornare, eu eleifend nibh cursus. Curabitur mi arcu, molestie in diam non, sagittis congue enim. Quisque pharetra felis urna, at rhoncus diam aliquet non. Mauris euismod, odio non pulvinar euismod, lacus lorem lacinia elit, vitae auctor elit ante eu dui. Sed interdum gravida ipsum. Donec aliquet convallis lorem, et molestie dui pulvinar eget."
const postTitle = "Sed ut perspiciatis unde omnis iste natus error sit."

const postContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus dolor eget nunc condimentum, ut tristique risus luctus. Praesent pulvinar vulputate tellus nec vulputate. In condimentum ex vitae tellus mollis faucibus. Nulla dictum scelerisque sapien quis vehicula. Ut est urna, venenatis at consectetur a, mattis quis sem. Maecenas feugiat, lacus quis condimentum porta, diam enim dapibus nulla, sit amet consectetur sapien nibh eget libero. Phasellus volutpat auctor diam sit amet dictum. Vivamus aliquam tortor quis augue ornare, eu eleifend nibh cursus. Curabitur mi arcu, molestie in diam non, sagittis congue enim. Quisque pharetra felis urna, at rhoncus diam aliquet non. Mauris euismod, odio non pulvinar euismod, lacus lorem lacinia elit, vitae auctor elit ante eu dui. Sed interdum gravida ipsum. Donec aliquet convallis lorem, et molestie dui pulvinar eget."

let posts = []

app.get("/", function(req,res){
  res.render("bloghome", {
    startingContent:homestartingcontent,
    posts:posts
})
});

app.get("/post", function(req,res){
  res.render("blogpost", {postTitle:postTitle, postContent:postContent})
});

app.get("/compose", function(req,res){
  res.render("compose")
});

app.post("/compose", function(req,res){

  const post = {
    title: req.body.postTitle,
    content: req.body.postContent,
  };

posts.push(post);

res.redirect("/")

});







app.get("/post/:postName", function(req,res){
  console.log(req.params.postName);
})

//------------
app.listen(3000, function(){
  console.log("Server started on port 3000!");
})
//------------
