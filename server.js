
console.log("May Node be with you")



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

