const express = require('express');
const bodyParser = require("body-parser")
const MongoClient = require('mongodb').MongoClient

const connectionString = "mongodb+srv://@cluster0.hnviy5s.mongodb.net/?retryWrites=true&w=majority";
const app = express();


//Callback method
// MongoClient.connect(connectionString, (err, client) => {
//   if (err) return console.error(err)
//   console.log("Connected to Database");
// })

// use of Promise
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log('listening on 3000')
});

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})


