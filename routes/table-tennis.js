var router = require('express').Router();


var athletes = [
  { name: 'Yijun Feng',     origin: 'Atlanta, Ga.',       sport: 'Table-Tennis' },
  { name: 'Kanak Jha',      origin: 'Milpitas, Calif.',   sport: 'Table-Tennis' },
  { name: 'Timothy Wang',   origin: 'Houston, Texas',     sport: 'Table-Tennis' },
  { name: 'Jennifer Wu',    origin: 'Fort Lee, N.J.',     sport: 'Table-Tennis' },
  { name: 'Lily Zhang',     origin: 'Palo Alto, Calif.',  sport: 'Table-Tennis' },
  { name: 'Jiaqi Zheng',    origin: 'Fremont, Calif.',    sport: 'Table-Tennis' }
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
