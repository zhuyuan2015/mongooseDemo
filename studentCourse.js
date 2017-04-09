/**
 * Describe:
 * Created by ZhuYuan on 2017-04-08 21:35
 */
var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/student');
var db = mongoose.connection;