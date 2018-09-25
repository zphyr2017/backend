var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/*Start the Server*/
app.listen(3000,function(){
console.log("It's Started on PORT 3000");
});