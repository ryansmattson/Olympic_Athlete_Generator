var router = require('express').Router();
var badminton = require('./badminton');
var judo = require('./judo');
var synchronizedSwimming = require('./synchronized-swimming');
var tableTennis = require('./table-tennis');
var triathlon = require('./triathlon');



router.get('/', function(request, response){
  response.send('You are in Olympics.');
})

router.use('/badminton', badminton);
router.use('/judo', judo);
router.use('/synchronized-swimming', synchronizedSwimming);
router.use('/table-tennis', tableTennis);
router.use('/triathlon', triathlon);




module.exports = router;
