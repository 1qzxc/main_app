const express = require("express");
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
const request = require('request');
const fetch = require('cross-fetch');


//const path = require('path');

// reowrks using ejs + https://blog.logrocket.com/top-express-js-template-engines-for-dynamic-html-pages/ 
// remove public dir in order to render pages using EJS on the fly and send them
const publicDir = require('path').join(__dirname,'/views/public');
app.use(express.static(publicDir));

// on the differences between app.set,get,router.get : https://stackoverflow.com/questions/27227650/difference-between-app-use-and-router-use-in-express
app.set("view engine", "ejs");
app.set('views', path);


//app.get('/', (request, response) => { // he other hand, is part of Express' application routing and is intended for matching and handling a specific route when requested with the GET HTTP verb:
//  return response.send('OK');
//});

async function getPosts() {
  const response1 = await fetch(`http://192.168.1.201:1337/posts`);
  const data = await response1.json();
  //console.log(data);
  //console.log(data[0].pictures);
  return data
}


app.get('/', async function (request, response, next)  {
  // fetch list of categories 
  // for each category fetch list of projects
  // push 

  var projects = [
    { title: 'Nodejs blog app', description: " blog.morozovme.com ", projUrl: "http://192.168.1.201:8089/nodejs-blogapp" },
    { title: ' Grafana', description: " Home apps monitoring using grafana ", projUrl: "http://192.168.1.201:8089/grafana" },
    { title: ' Python Flask blog ', description: "Blogging app written along with API", projUrl: "http://192.168.1.201:8089/python-flask" }
  ];


  var categories = [
    { name: 'Web-app Development', projects: projects},
    { name: 'IaC', projects: projects },
    { name: 'Administration', projects: projects },
  ]



  response.render('pet', {
    subject: 'Study projects',
    entity: 'Study projects',
    link: 'https://google.com',
    focus: 'pet',
    categories: categories
  });


});

app.get('/mentorship', (request, response) => {
  response.render('mentorship', {
    subject: 'Study projects',
    entity: 'Study projects',
    link: 'https://google.com',
    focus: 'mentorship'
  });
});

app.get('/articles', (request, response) => {


  var articles = [
    { title: 'Whataver floats your boat', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: ['economy', 'politics', 'tech', 'my_thoughts'], imageURL: "https://dummyimage.com/900x400/ced4da/6c757d.jpg", date: "Jan 1 2021" },
    { title: 'Title 2', text: "some text for number 2", tags: ['economy', 'politics', 'tech', 'my_thoughts'], imageURL: "https://dummyimage.com/900x400/ced4da/6c757d.jpg", date: "Jan 1 2021" },
    { title: 'Title 3', text: "some text for number 3", tags: ['economy', 'politics', 'tech', 'my_thoughts'], imageURL: "https://dummyimage.com/900x400/ced4da/6c757d.jpg", date: "Jan 1 2021" }
  ];

    response.render('articles', {
    subject: 'Articles',
    entity: 'Articles',
    link: 'https://google.com',
    focus: 'articles',
    articles: articles /* pass posts from database */
  });
});

app.get('/videos', (request, response) => {
  response.render('videos', {
    subject: 'Videos',
    entity: 'Videos',
    link: 'https://google.com',
    focus: 'videos'
  });
});

app.get('/about', (request, response) => {
  response.render('about', {
    subject: 'about',
    entity: 'about',
    link: 'https://google.com',
    focus: 'about'
  });
});

app.get('/ansible', (request, response) => {
  response.render('ansible', {
    subject: 'ansible',
    entity: 'ansible',
    focus: 'pet'
  });
});

app.get('/nodejs-blogapp', (request, response) => {
  response.render('nodejs-blogapp', {
    subject: 'blogapp',
    entity: 'blogapp',
    focus: 'pet'
  });
});


app.get('/python-flask', (request, response) => {
  response.render('python-flask', {
    subject: 'flask',
    entity: 'flask',
    focus: 'pet'
  });
});

app.get('/sitik', (request, response) => {
  response.render('sitik', {
    subject: 'sitik',
    entity: 'sitik',
    focus: 'pet'
  });
});

app.get('/koareact', (request, response) => {
  response.render('koareact', {
    subject: 'koareact',
    entity: 'koareact',
    focus: 'pet'
  });
});

app.get('/jquery', (request, response) => {
  response.render('jquery', {
    subject: 'jquery',
    entity: 'jquery',
    focus: 'pet'
  });
});

app.get('/jenkins', (request, response) => {
  response.render('jenkins', {
    subject: 'jenkins',
    entity: 'jenkins',
    focus: 'pet'
  });
});


app.get('/grafana', (request, response) => {
  response.render('grafana', {
    subject: 'grafana',
    entity: 'grafana',
    focus: 'pet'
  });
});


// https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js#:~:text=app.get%20is%20called%20when%20the%20HTTP%20method%20is,you%20access%20to.%20Difference%20between%20app.use%20%26%20app.get%3A
app.use("/",router); // <--- binging middleware, sets root path for 'app' and use router for subpaths 
//  limits the middleware to only apply to any paths requested that begin with it

//router.use(function (req,res,next) {  // <---- use chain of javascript functions on this path 
//  console.log("/" + req.method + "  req = " + req.ip);
//  next();
//});

//router.get("/",function(req,res){
//  res.sendFile(path + "index.ejs");
//});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});



router.get("/php",function(req,res){
  res.sendFile(path + "php.html");
});


router.get("/python-flask-microsvc",function(req,res){
  res.sendFile(path + "python-flask-microsvc.html");
});


router.get("/grafana",function(req,res){
  res.sendFile(path + "grafana.html");
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



router.get("/postgres",function(req,res){
  res.sendFile(path + "postgres.html");
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
