function l(n) {
    console.log(n);
}

//引包
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/haha");

//创建一个模型
var Cat = mongoose.model("Cat", {name: String});
//实例一个猫
var kitty = new Cat({name: "hello mongoose"});
//调用这只猫的保存方法
kitty.save(function (err) {
    if (err) {
        l(err);
        return;
    }
    l("success");
});

var tom = new Cat({name: "汤姆"});
tom.save(function (err) {
    if (err) {
        l(err);
        return;
    }
    l("汤姆保存成功");
});
