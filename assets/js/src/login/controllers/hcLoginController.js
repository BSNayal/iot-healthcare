(function() {
  'use strict';
  var module = angular.module('hcLogin');
  module.controller(
    'hcLoginController',
    [function() {
      var vm = this;
      vm.userName='';
      vm.password='';

      vm.signIn = function() {
        console.log(vm.userName, vm.password);
      }
    }
  ]);
})();
