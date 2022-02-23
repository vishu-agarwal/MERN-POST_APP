const mongoose = require("mongoose");
const uschema = mongoose.Schema({
    name: String,
    password: String,
})
const umodel = mongoose.model("abcCollection", uschema, "abcCollection");
module.exports = umodel;