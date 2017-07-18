(function (angular) {
  'use strict';

  angular.module('username')
              .controller('UserNameController', UserNameController);

  UserNameController.$inject = ['UserNameCheckService'];

  function UserNameController(UserNameCheckService) {

      var self = this;

      self.suggestionsUserName = [];
      self.showSuggestions = false;
      self.suggestionsUserNameSelected = "";
      self.userNameValid = false;
      self.userNameInValid = false;
      self.userNameModel = "";
      self.userNameSugestionModel = "";

      self.userNameChange = function() {

        if (self.userNameModel != undefined && self.userNameModel != "") {
            if (self.userNameModel.length >= 1 && self.userNameModel.length < 6) {
                self.userNameValid = false;
                self.userNameInValid = true;
            } else {
                self.userNameValid = false;
                self.userNameInValid = false;
                self.checkUserName(self.userNameModel);
                if (self.userNameValid) {
                    self.userNameValid = true;
                    self.userNameInValid = false;
                } else {
                    self.userNameValid = false;
                    self.userNameInValid = true;
                }
            }
        } else {
            self.suggestionsUserName = [];
            self.showSuggestions = false;
            self.userNameValid = false;
            self.userNameInValid = false;
        }          
      }

      self.checkUserName = function() {
          
          UserNameCheckService.query({'usernameparam': self.userNameModel}).$promise.then(isSucess,isError);                    
          function isSucess(response) {
            self.suggestionsUserName = response;
            if (self.suggestionsUserName[0].userName == "VALID") {
                self.userNameValid = true;
                self.userNameInValid = false;
            } else {
                self.userNameValid = false;
                self.userNameInValid = true;
            }
            if (self.suggestionsUserName.length > 1) {
                self.showSuggestions = true;
            } 
          }
          function isError(response) {
            console.log('LOG : UserNameController - self.checkUserName - response = ' + response);
          }
      }
      
      self.userNameSugestionSelected = function() {
        self.userNameModel = self.userNameSugestionModel;
        self.suggestionsUserName = [];
        self.showSuggestions = false;
        self.userNameValid = true;
        self.userNameInValid = false;  
      }
  }

})(window.angular);
