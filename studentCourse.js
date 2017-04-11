/**
 * Describe: 学生和课程结构
 * Created by ZhuYuan on 2017-04-08 21:35
 */
var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/student');
var db = mongoose.connection;

//学生
var studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    sex: String
});
//学生实例方法
studentSchema.methods.addAge = function(){
    this.age++;
    this.save();
}
var Student = mongoose.model("Student",studentSchema);

//课程
var courseSchema = mongoose.Schema({
    name: String,
    info: String,
    student: [studentSchema]
});
//添加课程实例
courseSchema.methods.addStudent = function(studentObj,callback){
    this.student.push(studentObj);
    this.save(function(){
        callback();
    });
}
//通过课程查找学生
courseSchema.methods.findStudent = function(number,callback){
    Student.findOne({
        name: this.student[number].name
    },function(error,result){
        if(error || !result){
            return;
        }
        callback(error,result);
    });
}
var Course = mongoose.model("Course",courseSchema);

//实例学生
/*
Student.create({"name":"小明","age":12,"sex":"男"});
Student.create({"name":"小强","age":12,"sex":"男"});
Student.create({"name":"小红","age":12,"sex":"女"});
Student.create({"name":"小花","age":12,"sex":"女"});*/

//添加课程和学生
/*
var tom = new Student({"name":"tom","age":12,"sex":"man"});
    tom.save();
var math = new Course({
    name: "数学课",
    info: "我喜欢数学",
});
math.addStudent(tom,function(){
    l("ok");
});*/

/*Course.findOne({
    name: "数学课"
},function(e,r){
    error(e);
    r.student[0].age++;
    r.save();
});*/

/*Course.find({},function(e,r){
    error(e);
    for(var i = 0; i < r.length; i++){
        l(r[i].student);
    }
});*/

//使用
/*Student.findOne({
    name:"小明"
},function(e,r){
    error(e);
    r.addAge();
});*/

/**
 * 开始 添加学生和课程
 */

/*
var tom = new Student({"name":"tom","age":12,"sex":"man"});
    tom.save();
var math = new Course({
    name: "数学课",
    info: "我喜欢数学"
});
math.addStudent(tom,function(){
    l("ok");
});
*/

//查找学生并添加一岁 只能学生表添加 不能同步课程的
/*Student.findOne({
    name:"小明"
},function(error,result){
    if(error || !result){
        return;
    }
    r.addAge();
});*/

// 可以同步
Course.findOne({
    name: "数学课"
},function(error,result){
    if(error || !result){
        return;
    }
    //课程表修改
    result.student[0].age++;
    result.save();
    //学生表修改
    result.findStudent(0,function(error,result){
        result.addAge();
    });
});

/**
 * 结束 添加学生和课程
 */

function l(n) {
    console.log(n);
}
