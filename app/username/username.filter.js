(function (angular) {
    'use strict';
    
    angular.module('username')
            .filter('spaceless',function(){
            return function(input) {
                return input.replace(' ','-');
            }
    });
})(window.angular)