/**
 * Description：结构
 * Created by ZhuYuan on 2017/4/6
 */

var mongoose = require("mongoose");
var db = require("./db.js");

var bookSchema = new mongoose.Schema({
    name: {type : String},
    author: {type : String},
    price: {type : Number},
    type:  {type: Arrry}
});

var bookModel = db.model("Book",bookSchema);
module.exports = bookModel;