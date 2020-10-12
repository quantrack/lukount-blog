const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {type:String, required: true},
    content: {type:String, required: true},
    createdAt: Number,
    })


module.exports = mongoose.model("Post", postSchema);