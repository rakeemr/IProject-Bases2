(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .controller('controllerIndex', controllerIndex)
        .config(config)
        .run(run);

    function controllerIndex(){

    }

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'DashboardController',
                templateUrl: 'dashboard/dashboard.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentConnection) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentConnection.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login']) === -1; // Here u can set the pafges to acces with out permissions
            var loggedIn = $rootScope.globals.currentConnection;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();