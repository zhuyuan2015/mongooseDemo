/**
 * Describe: 博客的数据结构
 * Created by ZhuYuan on 2017-04-07 22:53
 */
var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/blog');
var db = mongoose.connection;
db.once('open', function (callback) {
    l("数据库成功打开");
});
var blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comment: [
        {
            body: String,
            date: Date
        }
    ],
    date:{
        type: Date,
        defaule: Date.now
    },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});
blogSchema.methods.addComment = function(obj,calllback){
    this.comment.push(obj);
    this.save();
}
var Blog = mongoose.model("Blog",blogSchema);
/*var blog = new Blog({
    title: "String",
    author: "String",
    body: "String"
});
blog.addComment({
    body: "一个评论",
    date: new Date()
});*/
//找到某条数据 增加一个评论
Blog.findOne({
    title: "String"
},function(error,result){
    if(!result){
        return;
    }
    result.addComment({
        body: "再来一个评论",
        date: new Date()
    });
});
function l(n) {
    console.log(n);
}

