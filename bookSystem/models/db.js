/**
 * Describe:链接
 * Created by ZhuYuan on 2017-04-06 16:10
 */

function l(n) {
    console.log(n);
}

// mongoose 链接
var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
var setting = require("../../setting.js");
var db       = mongoose.createConnection(setting.book);

module.exports = db;

db.once("open",function(callback){
    l("数据库打开成功");
});

db.on("error", function(error) {
    l("数据库打开失败");
});
