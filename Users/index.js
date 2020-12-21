var express = require('express');
var app = express();

var mongoose = require('mongoose');
var router = require('./routes/api');
const bodyParser = require('body-parser');
var cors = require('cors');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}





mongoose.connect('mongodb+srv://cart:shopping@shopping.mcys0.mongodb.net/Shopping?retryWrites=true&w=majority');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('Connected');
});
mongoose.Promise= global.Promise;
app.use(allowCrossDomain);
app.use(cors());
app.use(bodyParser.json());
app.use( '/', router);

 
app.listen(8000);
