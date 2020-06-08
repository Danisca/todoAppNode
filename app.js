const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
console.log(date);

const app = express();

let todos = ["buy food","cook food","eat food"];
let work = [];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    let today = date.getDate();
    
    res.render("list",{pageTitle: today,items: todos});
    //console.log(todos);
});

app.post("/",function(req,res){
    let newItem = req.body.newItem;
    console.log(req.body.button);
    
    if (req.body.button === "Work") {
        work.push(newItem);
        res.redirect("/work");
    } else {
        todos.push(newItem);
        res.redirect("/");
    }
    
});

app.get("/work",function(req,res){
    res.render("list",{pageTitle: "Work",items: work});
});

app.post("/work",function(req,res){
    let newItem = req.body.newItem;
    work.push(newItem);
    redirect("/work");
});

app.listen(process.env.PORT || 3000,function(){
    console.log("server running at 3000 port");    
});

/* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 9/17/2016
console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016 */