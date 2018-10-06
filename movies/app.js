var request=require("request");
var express=require("express");
var ejs=require("ejs");
var app=express();
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search");
});


app.get("/results",function(req,res){
    console.log(req.query.search);
    request("http://www.omdbapi.com/?s="+req.query.search+"&apikey=thewdb",function(error,resposne,body){
        if(!error && resposne.statusCode==200){
            var data = JSON.parse(body);
            res.render("results",{data:data});
           // res.send(data);
            // for(var i=0;i<10;i++){
            //  res.send(data["Search"][i]);  
            //  }
            
        }
    });
    
});
app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Movie Server started"); 
});
