var router = require('express').Router();



var athletes = [
  { name: 'Colton Brown',       origin: 'Piscataway, N.J.',   sport: 'Judo' },
  { name: 'Angelica Delgado',   origin: 'Miami, Fla.',        sport: 'Judo' },
  { name: 'Nick Delpopolo',     origin: 'Davie, Fla.',        sport: 'Judo' },
  { name: 'Kayla Harrison',     origin: 'Middletown, Ohio',   sport: 'Judo' },
  { name: 'Marti Malloy',       origin: 'Oak Harbor, Wash.',  sport: 'Judo' },
  { name: 'Travis Stevens',     origin: 'Tacoma, Wash.',      sport: 'Judo' }
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
