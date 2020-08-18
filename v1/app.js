var express= require("express");
var app = express();
var PORT = 3000; 
  
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
   
});

app.get("/campgrounds",function(req,res){
    
})

app.listen(PORT, function(err){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port", PORT); 
})


