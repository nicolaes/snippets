'use strict';

describe('Controller: ViewCtrl', function () {
  // load the controller's module
  beforeEach(module('ngSnippetsApp'));

  var ViewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    // Simulate an ID parameter from the route
    var mockRouteParams = {};
    mockRouteParams.id = 'snipone';

    // Mock for the snippets service
    var SnippetsServiceMock = {};
    SnippetsServiceMock.$child = function(id){
      if (id === 'snipone') {
        return {
          $id: 'snipone',
          author: 'John',
          titile: 'Snippet One',
          description: 'About snippet one',
          content: 'code code code ...',
          created: '2014-06-29T12:00:00.000Z'
        };
      }
    };

    ViewCtrl = $controller('ViewCtrl', {
      $scope: scope,
      $routeParams : mockRouteParams,
      SnippetsService: SnippetsServiceMock
    });
  }));

  it('should obtain the snippet with the requested id', function () {
    expect(scope.snippet.$id).toBe('snipone');
    expect(scope.snippet.author).toBe('John');
  });
});
