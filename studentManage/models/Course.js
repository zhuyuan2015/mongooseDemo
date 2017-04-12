/**
 * Describe:课程
 * Created by ZhuYuan on 2017-04-11 22:59
 */

var mongoose = require("./db.js");

//模式
var courseSchema = new mongoose.Schema({
    cid : Number,
    name : String,
    students : [Number]
});
courseSchema.index({
    cid:1
});
//课程中添加学生
courseSchema.statics.addStudent = function(courseArray,cid,callback){
    for(var i=0;i<courseArray.length;i++){
        Course.update({
            cid:courseArray[i]
        },{
            $push:{
                students:cid
            }
        },function(){
            callback();
        });
    }
}
//模型
var Course = mongoose.model("Course",courseSchema);
module.exports = Course;