var router = require('express').Router();


var athletes = [
  { name: 'Phillip Chew',         origin: 'Orange, Calif.',         sport: 'Badminton' },
  { name: 'Eva Lee',              origin: 'Diamond Bar, Calif.',    sport: 'Badminton' },
  { name: 'Paula Lynn Obanana',   origin: 'West Covina, Calif.',    sport: 'Badminton' },
  { name: 'Sattawat Pongnairat',  origin: 'Orange, Calif.',         sport: 'Badminton' },
  { name: 'Howard Shu',           origin: 'Anaheim, Calif.',        sport: 'Badminton' },
  { name: 'Jamie Subandhi',       origin: 'Westminster, Calif.',    sport: 'Badminton' },
  { name: 'Iris Wang',            origin: 'Arcadia, Calif.',        sport: 'Badminton' }
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
