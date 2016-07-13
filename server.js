var express = require('express');
var index = require('./routes/index')
var olympics = require('./routes/olympics')

var app = express();

//Static Files
app.use(express.static('public'));


app.use('/', index);
app.use('/olympics', olympics);


var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port ', port);
})
