'use strict';

angular.module('ngSnippetsApp')
  .factory('SnippetsService', function($firebase){
    var firebaseRef =
      new Firebase('https://radiant-fire-6888.firebaseio.com/snippets');
    return $firebase(firebaseRef);
  });