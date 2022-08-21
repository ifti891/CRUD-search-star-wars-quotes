// requiring express in server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const MongoClient = require('mongodb').MongoClient
// let MyDatabase = `mongodb+srv://ifti891:Kalsi0810@cluster0.hnviy5s.mongodb.net/?retryWrites=true&w=majority`

const MongoClient = require('mongodb').MongoClient
let myMongoDbUrl = 'mongodb+srv://ifti891:Kalsi0810@cluster0.hnviy5s.mongodb.net/?retryWrites=true&w=majority'

// Make sure you place body-praser before your CRUD handlers!

// app.use(bodyParser.urlencoded({extended: true}))

// create a server that browser can connect. we do it by using Express 'listen' method


// app.listen(3000, function() {
//   console.log('listeing on 3000')
// })

// In Express, we handle a GET request with the get method:

/*
app.get('/', function(req, res) {
  res.send('Hello World');
})
*/
// This is how Express handles a GET request (READ operation)
// app.get('/',(req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

// CREATE operation if they send POST request to the server

// app.post('/quotes', (req, res) => {
//   console.log(req.body)
// })

// console.log("May Node be with you")


// connection to database aka `Mongodb` 

// MongoClient.connect('MyDatabase', (err, client) => {
//   // do something
//   if(err) return console.error(err)
//   console.log('connected to Database')
// })

/*
MongoClient.connect(myMongoDbUrl, (err, client) => {
  if(err) return console.error(err)
  console.log('Connected to Database')
})
*/

// Mongo promise of the above instead of callback

/*
MongoClient.connect(myMongoDbUrl, {useUnifiedTopology: true})
.then(client => {
  console.log('Connected to Database')
})
.catch(error => console.error(error))
*/

// changing the database and promise instead of callback and putting all the express request handlers into MongoClients

MongoClient.connect(myMongoDbUrl, {useUnifiedTopology: true})
.then(client => {
  console.log('Connected to Database')

const db = client.db("invader-zim-quotes")

// collections (can name anything tho.)
const quotesCollection = db.collection('quotes')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {

  //insertOne method
  quotesCollection.insertOne(req.body)
  .then (result => {
    console.log(result)
    res.redirect('/')
  })
  .catch(error => console.error)
})


app.listen(3000, function() {
  console.log('listening on 3000')
})
})
.catch(console.error)



// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const MongoClient = require('mongodb').MongoClient
// let myMongoDbUrl = 'mongodb+srv://ifti891:Kalsi0810@cluster0.hnviy5s.mongodb.net/?retryWrites=true&w=majority'


// // make sure to put body parser befor your CRUD handlers!
// app.use(bodyParser.urlencoded({extended: true}));


// // CRUD handlers

// // LISTEN
// app.listen(3000, function(){
//   console.log("listening on 3000")
// })


// // app.get('/', function(req, res){
// //   res.send("Hello World!");
// // })

// // ES6 function of above

// // app.get('/', (req, res) => {
// //   res.send("Hello World ES6!");
// // })

// // GET
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// })



// // POST

// // app.post('/quotes', (req, res) => {
// //   console.log('Hellooooooooooo!')
// // })

// // POST after body-parser

// app.post('/quotes', (req, res) => {
//   console.log(req.body)
// })


// // MongoDB callback

// // MongoClient.connect(myMongoDbUrl, (err, client) => {
// //   if(err) return console.error(err)
// //   console.log('Connected to Database')
// // })


// // MongoDB promise function of the same above

// MongoClient.connect(myMongoDbUrl, { useUnifiedTopology: true})
//   .then((client) => {
//     // console.log("Connected to Database Star-wars Quotes")
// })
// .catch(error => console.error(error))



// // Changing the name of the database (Mongodb)

// MongoClient.connect(myMongoDbUrl, {useUnifiedTopology: true})
// .then(client => {
//   console.log("Connected to Database")
//   const db = client.db("Star-wars-quotes")
// })
