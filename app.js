var angularApp = angular.module('AngularApp', ['ngRoute', 'swapi']);

angularApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl : 'views/main.html',
      controller : 'MainCtrl',
      controllerAs : 'main'
    })
    .otherwise('/');
  }
]);