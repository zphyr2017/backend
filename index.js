var express = require("express");
var app = express();
const PORT = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/*Start the Server*/
app.listen(PORT,function(){
console.log("It's Started on PORT 3000");
});