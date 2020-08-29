var express= require("express");
var app = express();

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server Has Started!");
});

app.set("view engine","ejs");

app.get("/",function(req, res){
    res.render("landing");   
});

app.get("/campgrounds",function(req, res){
    var campgrounds=[
        {name:"Kadal",image: "https://images.pexels.com/photos/4268140/pexels-photo-4268140.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name:"Goa",image: "https://pixabay.com/get/54e5d4414356a814f1dc84609620367d1c3ed9e04e5074407d2a7dd6964ecd_340.jpg"}
    ]
    res.render("campgrounds",{Campgrounds:campgrounds});
});
