var express =require('express');
var mongoose= require('mongoose');
var bodyParser= require('body-parser');
var cors = require('cors');
//
var app = express();
//routes
const routes=require('./routes/routes.js');
//connect to mongoose
mongoose.connect('mongodb://localhost:27017/shoppingList');
//on connection

mongoose.connection.on('connected',()=>{
  console.log("Connected SuccessFully");
});

//on connection console.error();
mongoose.connection.on('error',(err)=>{
  console.log(err);
});
const PORT=3000;
//adding middle ware cors


app.use(cors());
app.use(bodyParser.json());
app.use('/api',routes);

app.get("/",(req,res)=>{
  res.send("Hello from My first Node Application");
});

app.listen(PORT,()=>{
  console.log("Service Started SuccessFully");
});
