(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.Connection = Connection;

        (function initController() {
            // reset connection status
            AuthenticationService.ClearCredentials();
        })();

        function Connection() {
            vm.dataLoading = true;

            AuthenticationService.Connection(vm.host, vm.port, vm.dbname, vm.user, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.host, vm.port, vm.dbname, vm.user, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
