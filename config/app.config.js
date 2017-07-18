(function (angular) {
    'use strict';

    angular.module('username').config(AppConfig);

    AppConfig.$inject = ['$stateProvider'];

    function AppConfig($stateProvider) {

        $stateProvider
            .state('username', {
                url: '/username',
                templateUrl: 'app/username/username.html',
                controller: 'UserNameController',
                controllerAs: 'userNameCtrl'
            });
    }
})(window.angular);
