var app = angular.module('atheleteApp', []);

app.controller('AthleteController', function($scope, $http){

  $scope.randomAthleteArray = [];

  function handleSuccess(response){
    console.log('Success:', response.data);
    $scope.randomAthleteArray.push({ name: response.data[0], origin: response.data[1], sport: response.data[2]});
  }

  function handleFailure(response){
    console.log('Failure:', response.data);
  }

  function getAthlete(sport) {
    $http({
        method: 'GET',
        url: '/olympics/' + sport
    }).then(handleSuccess, handleFailure);
  }

  $scope.generateAthletesButton = function () {
    $scope.randomAthleteArray = [];
    getAthlete('badminton');
    getAthlete('judo');
    getAthlete('synchronized-swimming');
    getAthlete('table-tennis');
    getAthlete('triathlon');
  };








})
