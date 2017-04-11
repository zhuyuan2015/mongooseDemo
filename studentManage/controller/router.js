/**
 * Describe: 路由
 * Created by ZhuYuan on 2017-04-09 23:13
 */

var Student = require("../models/Student.js");
var Course = require("../models/Course.js");

/*Course.create({
    cid:"100",
    name:"语文"
});
Course.create({
    cid:"101",
    name:"数学"
});
Course.create({
    cid:"102",
    name:"英语"
});*/

exports.showIndex = function(req,res){
    Student.find({},function(error,result){
        if(error || !result){
            res.end("error");
            return;
        }
        res.render("index",{
            result: result
        });
    });
}

exports.showAdd = function(req,res){
    Course.find({},function(error,result){
        if(error || !result){
            res.end("error");
            return;
        }
        res.render("add",{
            course: result
        });
    });
}

exports.doAdd = function(req,res){
    Student.create(req.query,function(error,result){
        if(error || !result){
            res.end("error");
            return;
        }
        Course.addStudent(req.query.Courses,req.query.cid,function(){
            res.end("ok");
        });
    });
}

exports.showEdit = function(req,res){
    Student.findOne({
        sid: req.query.id
    },function(error,result){
        if(error || !result){
            res.end("error");
            return;
        }
        res.render("edit",{
            sid: result.sid,
            name: result.name,
            age: result.age,
            sex: result.sex
        });
    });
}


exports.doEdit = function(req,res){
    Student.update({
        sid:req.query.sid
    },{
        $set:{
            name:req.query.name,
            age:req.query.age,
            sex:req.query.sex
        }
    },function(error,result){
        if(error || !result){
            res.end("error");
            return;
        }
        res.end("ok");
    });
}

function l(n) {
    console.log(n);
}