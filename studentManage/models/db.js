/**
 * Describe:链接
 * Created by ZhuYuan on 2017-04-11 23:05
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var setting = require("../../setting.js");
mongoose.connect(setting.student);
var db = mongoose.connection;
module.exports = mongoose;