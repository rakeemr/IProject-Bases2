(function(){

	'use strict'

	var app = angular.module('webAdminApp', ["ui.router"]);
    app.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/logIn");
      
      $stateProvider
        .state('logIn', {
            url: "/logIn",
            templateUrl: "logIn/logIn.html",
            controller:  'LogInController'
        })              
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html",
            controller:'DasboardController'
        });
    });

})();