angular.module('airline',['airlineServices'])
.config(airlineRouter);

function airlineRouter($routeProvider) {
    $routeProvider
        .when('/airports/:airportCode', {templateUrl: 'partials/airports.html',
            controller: 'AirportCtrl'})
        .when('/',{templateUrl: 'partials/destinations.html',
            controller: 'DestinationsCtrl'})
        .when('/flights', {templateUrl: 'partials/flights.html',
            controller: 'FlightsCtrl'})
        .when('/reservations', {templateUrl:'partials/reservations.html',
        controller: 'ReservationsCtrl'});
}


