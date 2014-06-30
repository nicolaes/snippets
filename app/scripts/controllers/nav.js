'use strict';

angular.module('ngSnippetsApp')
  .controller('NavCtrl', function($scope, $location){
    // Location check for the menu
    $scope.isLocation = function(path) {
      return $location.path() === path;
    }
  });