const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://ifti891:Kalsi0810@cluster0.hnviy5s.mongodb.net/?retryWrites=true&w=majority";
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, () => {
  console.log("Listning on 3000")
});

// callback
// MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {

//   if (err)
//     return console.error(err)
//   console.log("Connected to the Database")
// })

// Promise
// MongoClient.connect(uri, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//   })
//   .catch(error => console.log(error))

MongoClient.connect(uri, {useUnifiedTopology: true})
  .then(client => {
    console.log("Connected to database")
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.use(/* ... */)
    app.get(/* ... */)
    app.post(/* ... */)
    app.listen(/* ... */)
  })
  .catch(error => console.error(error))


app.post('/quotes', (req, res) => {
  quotesCollection.insertOne(req.body)
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});




