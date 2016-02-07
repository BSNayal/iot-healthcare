(function() {
  'use strict';
  var module = angular.module('hcLogin');
  module.controller(
    'hcLoginController',
    ['$http',
      function(
      $http
    ) {
      var vm = this;
      vm.email='';
      vm.password='';

      vm.signIn = function() {
        $http.put('/login', {email: vm.email, password:vm.password}).
          then(function(successResponse) {
              console.log("login sucessful");
          }, function(errorResponse) {
              console.log('login FAILED');
          })
      };
    }
  ]);
})();
