'use strict';

angular.module('ngSnippetsApp')
  .filter('reverse', function() {
    var reverseFilter = function(items) {
      return items.slice().reverse();
    };
    return reverseFilter;
  });;