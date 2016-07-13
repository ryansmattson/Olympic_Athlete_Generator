var router = require('express').Router();


var athletes = [
  { name: 'Greg Billington',  origin: 'Spokane, Wash.',         sport: 'Triathlon' },
  { name: 'Gwen Jorgensen',   origin: 'St. Paul, Minn.',        sport: 'Triathlon' },
  { name: 'Ben Kanute',       origin: 'Geneva, Ill.',           sport: 'Triathlon' },
  { name: 'Joe Maloy',        origin: 'Wildwood Crest, N.J.',   sport: 'Triathlon' },
  { name: 'Sarah True',       origin: 'Hanover, N.H.',          sport: 'Triathlon' },
  { name: 'Katie Zaferes',    origin: 'Hampstead, Md.',         sport: 'Triathlon' },
];

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
