var express = require("express");
var cors = require('cors');
var app = express();
const PORT = process.env.PORT;

const Store = require('data-store');
const store = new Store({ path: 'lastposition.json' });
store.set('one', 'two'); 
console.log(store.data); //=> { one: 'two' }
console.log(store.get('one'));

app.use(cors());

const bodyParser = require('body-parser')

app.use(bodyParser.raw())

app.post('/updatepos', (req, res) => {
  console.log(req.body);
  store.clear();
  store.set('pos', req.body); 
})


//var obj = {'key':'value'};

// Read Synchrously
var fs = require("fs");

var content = fs.readFileSync("data.json");
//console.log("Output Content : \n"+ content+"\n"+JSON.stringify(obj));



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/sapr/list.json', function (req, res) {
  //res.send(content);
  res.send(store.get('pos'));
});


/*Start the Server*/
app.listen(PORT,function(){
console.log("It's Started on PORT 3000");
});