'use strict';

angular.module('ngSnippetsApp')
  .controller('HomeCtrl', function ($scope, SnippetsService) {
    // Get all snippets for the index page
    $scope.snippets = SnippetsService;
  });
