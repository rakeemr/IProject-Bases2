(function () {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['UserService', '$rootScope'];
    function DashboardController(UserService, $rootScope) {
        var vm = this;

        vm.connection = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;

        initController();

        function initController() {
            loadCurrentConnection();
            loadAllUsers();
        }

        function loadCurrentConnection() {
            vm.host = $rootScope.globals.currentConnection.host;
            vm.port = $rootScope.globals.currentConnection.port;
            vm.dbname = $rootScope.globals.currentConnection.dbname;
            vm.user = $rootScope.globals.currentConnection.username;
            vm.password = $rootScope.globals.currentConnection.password;
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }
    }

})();