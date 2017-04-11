/**
 * Description：路由控制
 * Created by ZhuYuan on 2017/4/6
 */

function l(n) {
    console.log(n);
}

var Book = require("../models/Book.js");
var objectId = require("mongodb").ObjectID;

//主页
exports.showIndex = function(req,res){
    Book.find({},function(error,result){
        if(error){
            l(error);
            return;
        }
        res.render("index",{
            result: result
        });
    });
}

//增加图书页面
exports.showAddEditBook = function(req,res){
    var id = objectId(req.query.id);
    if(!isEmptyObject(req.query)){
        Book.find(id,function(error,result){
            if(error){
                l(error);
                return;
            }
            res.render("addEditBook",{
                id: id,
                name : result[0].name,
                author : result[0].author,
                price : result[0].price,
                type : result[0].type,
            });
        });
    }else {
        res.render("addEditBook",{
            id : "",
            name : "",
            author : "",
            price : "",
            type : "",
        });
    }
}

//增加和修改图书
exports.doAddEditBook = function(req,res){
    var data = req.query;
    if(data.id == ""){
        Book.create({
            name: data.name,
            author: data.author,
            price: data.price,
            type: data.type
        },function(error){
            if(error){
                l(error);
                return;
            }
            res.send("OK");
        });
    }else{
        Book.update({
            _id: objectId(data.id)
        },{
            $set:{
                name: data.name,
                author: data.author,
                price: data.price,
                type: data.type
            }
        },function(err,result){
            if(err){
                l(err);
                return;
            }
            res.send(result);
        });
    }
}

function isEmptyObject(e) {
    var t;
    for (t in e){
        return !1;
    }
    return !0
}
