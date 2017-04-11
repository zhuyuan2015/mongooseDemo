/**
 * Describe:
 * Created by ZhuYuan on 2017-04-09 23:34
 */

var mongoose = require("./db.js");
//模式
var studentSchema = new mongoose.Schema({
    sid : Number,
    name : String,
    age : Number,
    sex : String,
    //存放课程的cid
    Courses: [Number]
});
studentSchema.index({
    sid:1
});
//模型
var Student = mongoose.model("Student",studentSchema);
module.exports = Student;
