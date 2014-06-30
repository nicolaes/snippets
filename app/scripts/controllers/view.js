'use strict';

angular.module('ngSnippetsApp')
  .controller('ViewCtrl', function($scope, $routeParams, SnippetsService){
    // Get the snippet with this ID
    var snippetId = $routeParams.id;
    //$scope.snippet = SnippetsService[snippetId];
    $scope.snippet = SnippetsService.$child(snippetId);
  });