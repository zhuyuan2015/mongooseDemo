/**
 * Describe: mongoose demo
 * Created by ZhuYuan on 2017-04-05 23:17
 */
function l(n) {
    console.log(n);
}

var Student = require("./models/Student.js");
var db = require("./models/db.js");

//新增
/*var me = new Student({
    name:"小明",
    sex:"男",
    age:22
});
me.save(function(){
    l("save");
});

//新增
Student.create({
    name:"小红",
    sex:"woman",
    age:22
},function(err){
    if(err){
        l(err);
        return;
    }
    l("save");
    db.close();
});

//查找
Student.find({
    name:"小红"
},function(err,result){
    if(err){
        l(err);
        return;
    }
    l(result);
    db.close();
});

//修改
Student.update({
    name:"小明"
},{
    $set:{
        name:"修改成 大明",
        age:23
    }
},function(err,result){
    if(err){
        l(err);
        return;
    }
    l(result);
    db.close();
});*/

//如果name匹配则删除全部
Student.remove({
    name:"小红"
},function(err,result){
    if(err){
        l(err);
        return;
    }
    l(result);
    db.close();
});
