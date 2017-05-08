function AppCtrl ($scope) {
  $scope.setActive = function (type){
    $scope.flightsActive='';
    $scope.destinationsActive='';
    $scope.reservationsActive='';
    $scope[type + 'Active'] = 'active';
  }




  $scope.editAirport=function (code) {
    $scope.editing=$scope.airports[code];
  };
}