const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: {type:String, required:true},
    title: {type:String, required:true},
    subtitle : {type:String, required:true},
    content: {type:String, required:true},
    writer: {type:String, required:true},
    },
    {
        timestamps: true
    })


module.exports = mongoose.model("Post", postSchema);