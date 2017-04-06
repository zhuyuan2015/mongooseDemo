/**
 * Description：入口
 * Created by ZhuYuan on 2017/4/6
 */
function l(n) {
    console.log(n);
}

var express = require("express");
var app = express();
var router = require("./controller/router.js");

app.set("view engine", "ejs");
app.get("/addBook", router.addBook);
app.get("/doAddBook", router.doAddBook);
app.listen(3000);

l(new Date());

