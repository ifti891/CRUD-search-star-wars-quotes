
const express = require("express");
const app = express();


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