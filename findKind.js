/**
 * Describe: 找同类
 * Created by ZhuYuan on 2017-04-08 15:54
 */

var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/blog');
var db = mongoose.connection;
db.once('open', function (callback) {
    l("数据库成功打开");
});

var animalSchema = new mongoose.Schema({
    "name" : String,
    "type" : String
});

//定义对象方法
animalSchema.methods.findKind = function(callback){
    this.model("Animal").find({
        type: this.type
    },callback);
}

var Animal = mongoose.model('Animal', animalSchema);
// 增加数据
/*Animal.create({"name":"汤姆","type":"猫"});
Animal.create({"name":"咪咪","type":"猫"});
Animal.create({"name":"小白","type":"狗"});
Animal.create({"name":"snoopy","type":"狗"});*/

Animal.findOne({
    name: "小白"
},function(e,r){
    if(e || !r){
        return;
    }
    r.findKind(function(e,r){
        error(e);
        l(r);
    });
});

function l(n) {
    console.log(n);
}