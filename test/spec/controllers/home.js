'use strict';

describe('Controller: HomeCtrl', function () {
  // load the controller's module
  beforeEach(module('ngSnippetsApp'));

  var HomeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    var SnippetsServiceMock = {
      snipone: {
        $id: 'snipone',
        author: 'John',
        titile: 'Snippet One',
        description: 'About snippet one',
        content: 'code code code ...',
        created: '2014-06-29T12:00:00.000Z'
      },
      sniptwo: {
        $id: 'sniptwo',
        author: 'Jane',
        titile: 'Snippet Two',
        description: 'About snippet two',
        content: 'just more code ...',
        created: '2014-06-29T13:00:00.000Z'
      }
    };

    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope,
      SnippetsService: SnippetsServiceMock
    });
  }));

  it('should obtain the list of snippets', function () {
    expect(typeof scope.snippets).toBe('object');
  });

  it('should attach real snippets to the scope', function () {
    expect(scope.snippets.snipone.$id).toEqual('snipone');
    expect(scope.snippets.sniptwo.author).toEqual('Jane');
  });
});
