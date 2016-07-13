var router = require('express').Router();

var athletes = [
  { name: 'Anita Alvarez',    origin: 'Kenmore, N.Y.',     sport: 'Synchronized-Swimming' },
  { name: 'Mariya Koroleva',  origin: 'Concord, Calif.',   sport: 'Synchronized-Swimming'}
]


function getRandomAthlete(array){
  var number = parseInt(Math.floor(Math.random() * (array.length)));
  var tempAthleteArray = [array[number].name, array[number].origin, array[number].sport];
  return tempAthleteArray
}


router.get('/', function(request, response){
  var randomAthlete = getRandomAthlete(athletes);
  response.send(randomAthlete);
})






module.exports = router;
