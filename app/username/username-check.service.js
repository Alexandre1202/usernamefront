(function (angular) {
  'use strict';

  angular.module('username')
          .service('UserNameCheckService', UserNameCheckService);

  UserNameCheckService.$inject = ['$resource'];
 
  function UserNameCheckService($resource) {  
        var urlCheckUsername = 'http://localhost:8080/username/webapi/username/checkusername/:usernameparam';
        return $resource(urlCheckUsername);
  }      
      //return $resource('app/username/username-suggestions.json');
    
})(window.angular)
