var express= require("express");
var app = express();
var PORT = 3000; 
  
app.get("/",function(req,res){
    res.send("this will be landing page soon!!");
});

app.listen(PORT, function(err){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port", PORT); 
})


