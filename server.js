var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

router.get("/nodejs-blogapp",function(req,res){
  res.sendFile(path + "nodejs-blogapp.html");
});

router.get("/php",function(req,res){
  res.sendFile(path + "php.html");
});

router.get("/python-flask",function(req,res){
  res.sendFile(path + "python-flask.html");
});

router.get("/python-flask-microsvc",function(req,res){
  res.sendFile(path + "python-flask-microsvc.html");
});

router.get("/jenkins",function(req,res){
  res.sendFile(path + "jenkins.html");
});

router.get("/grafana",function(req,res){
  res.sendFile(path + "grafana.html");
});

router.get("/sitik",function(req,res){
  res.sendFile(path + "sitik.html");
});

router.get("/home-lab",function(req,res){
  res.sendFile(path + "home-lab.html");
});

router.get("/ftp",function(req,res){
  res.sendFile(path + "ftp.html");
});

router.get("/rvproxy",function(req,res){
  res.sendFile(path + "rvproxy.html");
});

router.get("/elk",function(req,res){
  res.sendFile(path + "elk.html");
});

router.get("/hadoop",function(req,res){
  res.sendFile(path + "hadoop.html");
});

router.get("/cloud",function(req,res){
  res.sendFile(path + "cloud.html");
});

router.get("/zabbix",function(req,res){
  res.sendFile(path + "zabbix.html");
});

router.get("/kubernetes",function(req,res){
  res.sendFile(path + "kubernetes.html");
});

router.get("/docker",function(req,res){
  res.sendFile(path + "docker.html");
});

router.get("/koareact",function(req,res){
  res.sendFile(path + "koareact.html");
});

router.get("/postgres",function(req,res){
  res.sendFile(path + "postgres.html");
});



var publicDir = require('path').join(__dirname,'/views/public');
app.use(express.static(publicDir));

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});


app.listen(8084,function(){
  console.log("Live at Port 8084");
});
