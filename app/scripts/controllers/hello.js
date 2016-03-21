'use strict';

/**
 * @ngdoc function
 * @name angularfireSeedApp.controller:HelloCtrl
 * @description
 * # HelloCtrl
 * Controller of the angularfireSeedApp
 */
angular.module('angularfireSeedApp')
  .controller('HelloCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
