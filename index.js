var express = require("express");
var app = express();
const PORT = process.env.PORT;

var obj = {'key':'value'};

// Read Synchrously
var fs = require("fs");

var content = fs.readFileSync("data.json");
console.log("Output Content : \n"+ content+"\n"+JSON.stringify(obj));



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/sapr/list.json', function (req, res) {
  res.send(content);
});


/*Start the Server*/
app.listen(PORT,function(){
console.log("It's Started on PORT 3000");
});