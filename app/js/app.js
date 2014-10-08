angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cores', {templateUrl: 'partials/cores.html', controller: 'CoresCtrl'});
    $routeProvider.otherwise({redirectTo: '/cores'});
}]);
