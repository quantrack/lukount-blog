const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: {type:String},
    title: {type:String},
    subtitle : {type:String},
    content: {type:String},
    writer: {type:String},
    },
    {
        timestamps: true
    })


module.exports = mongoose.model("Post", postSchema);