/**
 * Description：路由控制
 * Created by ZhuYuan on 2017/4/6
 */
function l(n) {
    console.log(n);
}

//增加图书页面
exports.addBook = function(req,res){
    res.render("addBook");
}
//增加图书
exports.doAddBook = function(req,res){
    l(req.query);
}
