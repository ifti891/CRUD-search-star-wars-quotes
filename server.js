
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// make sure to put body parser befor your CRUD handlers!
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
  console.log("listening on 3000")
})


// app.get('/', function(req, res){
//   res.send("Hello World!");
// })

// ES6 function of above

// app.get('/', (req, res) => {
//   res.send("Hello World ES6!");
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})



// POST

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooo!')
})
