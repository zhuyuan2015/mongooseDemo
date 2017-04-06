/**
 * Describe: Schema 结构
 * Created by ZhuYuan on 2017-04-05 23:22
 */
function l(n) {
    console.log(n);
}

var mongoose = require("mongoose");
var db = require("./db.js");

//创建结构
var studentSchema = new mongoose.Schema({
    name : {type : String},
    sex : {type : String},
    age : {type : Number}
});

//创建模型
var studentModel = db.model("Student", studentSchema);
module.exports = studentModel;
