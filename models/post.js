const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: Number,
    })


module.exports = mongoose.model("Post", postSchema);