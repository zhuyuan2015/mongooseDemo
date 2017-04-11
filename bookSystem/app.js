/**
 * Description：入口
 * Created by ZhuYuan on 2017/4/6
 */

var express = require("express");
var app = express();
var router = require("./controller/router.js");

app.set("view engine", "ejs");
app.get("/", router.showIndex);
app.get("/addEditBook", router.showAddEditBook);
app.get("/doAddEditBook", router.doAddEditBook);
app.listen(3000);

l(new Date());

function l(n) {
    console.log(n);
}