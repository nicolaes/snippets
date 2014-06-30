'use strict';

angular.module('ngSnippetsApp')
  .controller('AddCtrl', function ($scope, $location, SnippetsService) {
    $scope.addSnippet = function(snippet) {
      // Mark the form as submitted, so the validation errors start displaying
      $scope.submitted = true;

      // Continue only if passed a valid snippet
      if (! snippet || ! snippet.$valid) {
        return;
      }
      
      // Set the creation date and save
      var date = new Date();
      snippet.created = date.toJSON();
      SnippetsService.$add(snippet);
      
      // Go back home
      $location.path('/');
    }
  });
