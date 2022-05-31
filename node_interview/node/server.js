// What is meant by request and response cycle in a nodejs application?
// What is express? What are the benefits of using this framework?
// What is Middleware? What are global and route level middlewares?
// What is the function of an express router? What is a route and route splitting?




// const express = require('express');
// const app = express()


// global middleware

// app.use(function(req,res,next){

//     console.log(req.url,">>>>>>>>");
//     next();
// })

// // http://localhost:3000/user 
// // route level
// app.use("/user",function(req,res,next){

//     console.log(req.url,">>>>>>>> route level");
//     next();
// })

// const authMiddleware = function(req,res,next){

//     console.log(req.url,"authenticated");
//     next();
// }


// function processData(data){
//     console.log(data);
// }

// app.get('/:username',[authMiddleware],(req,res)=>{
//  res.send('Welcome to home' + req.params.username)
// })
// app.post('/:username',(req,res)=>{
//  processData(req.params.username)
//  res.send('data is sent and processed')
// })


// app.get('/cats/:username',(req,res)=>{
//  res.send('Welcome to the cats page!' + req.params.username)
// })
// app.post('/cats/:username',(req,res)=>{
//  processData(req.params.username)
//  res.send('data is sent and processed')
// })



// app.get('/rabbits/:username',(req,res)=>{
//  res.send('welcome to the rabbits page, ' + req.params.username)


// })


// app.post('/rabbits/:username',(req,res)=>{
//     processData(req.params.username)
//  res.send('data processed ' + req.params.username)
// })


const express =require('express')
const routeExample = require('./router/route');
const app = express()

require('dotenv').config()
 
app.use('/',routeExample); //use routeExample.js to handle routes starting with '/'
app.use('/cats',routeExample); //use routeExample.js to handle routes starting with '/cats'
app.use('/rabbits',routeExample); //use routeExample.js to handle routes starting with '/rabbits'




app.listen(3000,()=>console.log("listen on port 3000",process.env.DB_USER,process.env.DB_PASSWORD))