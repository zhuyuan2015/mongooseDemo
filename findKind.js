/**
 * Describe: 找同类
 * Created by ZhuYuan on 2017-04-08 15:54
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');

var db = mongoose.connection;
db.once('open', function (callback) {
    console.log("数据库成功打开");
});

var animalSchema = new mongoose.Schema({
    "name" : String,
    "type" : String
});
//定义对象方法
animalSchema.methods.zhaotonglei = function(callback){
    this.model('Animal').find({"type":this.type},callback);
}

animalSchema.methods.findKind = function(callback){
    this.model("Animal").find({
        type: this.type
    },callback);
}

var Animal = mongoose.model('Animal', animalSchema);

/*Animal.create({"name":"汤姆","type":"猫"});
Animal.create({"name":"咪咪","type":"猫"});
Animal.create({"name":"小白","type":"狗"});
Animal.create({"name":"snoopy","type":"狗"});*/

Animal.findOne({
    name: "小白"
},function(error,result){
    e(error);
    result.findKind(function(error,result){
        e(error);
        l(result);
    });
});

function e(error){
    if(error){
        l(error);
        return;
    }
}

function l(n) {
    console.log(n);
}