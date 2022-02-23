const mongoose = require("mongoose");
const postscheme = mongoose.Schema({
    id:Number,
    title: String,
    message: String,
    name:String
})
const pmodel = mongoose.model("postcollection", postscheme, "postcollection");
module.exports = pmodel;