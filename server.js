const express = require("express");
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
//const path = require('path');

// reowrks using ejs + https://blog.logrocket.com/top-express-js-template-engines-for-dynamic-html-pages/ 
// remove public dir in order to render pages using EJS on the fly and send them
//const publicDir = require('path').join(__dirname,'/views/public');
//app.use(express.static(publicDir));

// on the differences between app.set,get,router.get : https://stackoverflow.com/questions/27227650/difference-between-app-use-and-router-use-in-express
app.set("view engine", "ejs");
app.set('views', path);


//app.get('/', (request, response) => { // he other hand, is part of Express' application routing and is intended for matching and handling a specific route when requested with the GET HTTP verb:
//  return response.send('OK');
//});

app.get('/index', (request, response) => {
  var posts = [
    { title: 'Whataver floats your boat', text: "Once a year I floate my boat", tags: ['economy', 'politics', 'tech', 'my_thoughts'], imageURL: "http//url.com" },
    { title: 'Whataver floats your boat', text: "Once a year I floate my boat", tags: ['economy', 'politics', 'tech', 'my_thoughts'], imageURL: "http//url.com" },
    { title: 'Whataver floats your boat', text: "Once a year I floate my boat", tags: ['economy', 'politics', 'tech', 'my_thoughts'], imageURL: "http//url.com" }
  ];

  response.render('index', {
    subject: 'morozovme',
    name: 'our template',
    link: 'https://google.com',
    focus: 'blog',
    posts: posts /* pass posts from database */
  });
});

app.get('/pet', (request, response) => {
  response.render('pet', {
    subject: 'Study projects',
    entity: 'Study projects',
    link: 'https://google.com',
    focus: 'pet'
  });
});


// https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js#:~:text=app.get%20is%20called%20when%20the%20HTTP%20method%20is,you%20access%20to.%20Difference%20between%20app.use%20%26%20app.get%3A
app.use("/",router); // <--- binging middleware, sets root path for 'app' and use router for subpaths 
//  limits the middleware to only apply to any paths requested that begin with it

router.use(function (req,res,next) {  // <---- use chain of javascript functions on this path 
  console.log("/" + req.method + "  req = " + req.ip);
  next();
});

//router.get("/",function(req,res){
//  res.sendFile(path + "index.ejs");
//});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/mentorship",function(req,res){
  res.sendFile(path + "mentorship.html");
});

router.get("/articles",function(req,res){
  res.sendFile(path + "articles.html");
});

router.get("/videos",function(req,res){
  res.sendFile(path + "videos.html");
});

router.get("/projects",function(req,res){
  res.sendFile(path + "projects.html");
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

router.get("/jquery",function(req,res){
  res.sendFile(path + "jquery.html");
});

router.get("/vagrant",function(req,res){
  res.sendFile(path + "vagrant.html");
});

router.get("/prometheus",function(req,res){
  res.sendFile(path + "prometheus.html");
});

router.get("/nas",function(req,res){
  res.sendFile(path + "nas.html");
});

router.get("/sqlite",function(req,res){
  res.sendFile(path + "sqlite.html");
});


router.get("/mysql",function(req,res){
  res.sendFile(path + "mysql.html");
});

router.get("/vagrant",function(req,res){
  res.sendFile(path + "vagrant.html");
});

router.get("/virtualization",function(req,res){
  res.sendFile(path + "virtualization.html");
});

router.get("/ansible",function(req,res){
  res.sendFile(path + "ansible.html");
});

router.get("/gitlabci",function(req,res){
  res.sendFile(path + "gitlabci.html");
});

router.get("/python-linked",function(req,res){
  res.sendFile(path + "python-linked.html");
});

router.get("/*",function(req,res){
  res.sendFile(path + "404.html");
});

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});



app.listen(8089,function(){
  console.log("Live at Port 8089");
});
