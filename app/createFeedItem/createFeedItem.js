(function (angular) {
  "use strict";

  var app = angular.module('myApp.createFeedItem', ['ngRoute', 'firebase.utils', 'firebase']);

  app.controller('createFeedItemtCtrl', ['$scope', 'geerItems', function($scope, geerItems) {
      $scope.geerItem = geerItems;
      $scope.addgeerItems = function(newgeerItems) {
        if( newgeerItems ) {
          $scope.geerItems.$add({text: newgeerItems});
        }
      };
    }]);

  app.factory('geerItems', ['fbutil', '$firebaseArray', function(fbutil, $firebaseArray) {
    var ref = fbutil.ref('geerItem').limitToLast(10);
    return $firebaseArray(ref);
  }]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/createFeedItem', {
      templateUrl: 'createFeedItem/createFeedItem.html',
      controller: 'createFeedItemCtrl'
    });
  }]);

})(angular);
