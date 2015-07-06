'use strict';
Parse.initialize("0T7fpNiGbFif8BkpljwWaVZqHOqrAtcdHO1NgGoh", "bJYQutZYKizzRh9mDNOwedanvQD7pscrDffWooZ3");

angular.module('todoapp',['ui.router','ui.bootstrap'])


.config(function($stateProvider, $urlRouterProvider) {
  

  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html",
     controller: 'loginCtrl',
     authenticate: false
    })
    .state('main', {
      url: "/main",
      templateUrl: "views/main.html",
      controller: 'mainCtrl',
      authenticate: true
    })
    .state('register', {
      url: "/register",
      templateUrl: "views/register.html",
      controller: 'registerCtrl',
      authenticate: false
    });
});