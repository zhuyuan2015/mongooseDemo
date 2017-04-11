/**
 * Describe: 学生管理
 * Created by ZhuYuan on 2017-04-09 23:05
 */

var express = require("express");
var app = express();
var router = require("./controller/router.js");

app.set("view engine", "ejs");
app.get("/", router.showIndex);
app.get("/add", router.showAdd);
app.get("/doAdd", router.doAdd);
app.get("/edit", router.showEdit);
app.get("/doEdit", router.doEdit);

app.listen(3000);

l(new Date());

function l(n) {
    console.log(n);
}


