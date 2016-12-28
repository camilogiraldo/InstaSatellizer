//Angular uses modules to organize application code
angular.module('Instagram', ['ngRoute', 'ngMessages']) //The first argument is the name of the module, second module dependencies This module depends on ngRoute and ngMessage
   .config(function($routeProvider){
     $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/photo/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise('/');
  });
