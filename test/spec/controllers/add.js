'use strict';

describe('Controller: AddCtrl', function () {
  // load the controller's module
  beforeEach(module('ngSnippetsApp'));

  var AddCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    // Mock for the snippets service
    var SnippetsServiceMock = {
      $add: function(snippet){
        scope.savedSnippet = snippet;
      }
    };

    // Define a location mock to register redirects
    var locationMock = {};
    locationMock.path = function(path){
      scope.newLocation = path;
    };

    AddCtrl = $controller('AddCtrl', {
      $scope: scope,
      $location: locationMock,
      SnippetsService: SnippetsServiceMock
    });
  }));

  it('should have and addSnippet function', function () {
    expect(typeof scope.addSnippet).toBe('function');
  });

  // mock snippet
  var mockSnippet = {
    author: 'Jack',
    titile: 'Snippet Three',
    description: 'About snippet three',
    content: '// comments only'
  };

  it('should not add anything if the snippet is not validated', function () {
    // simulate a snippet without validation
    scope.addSnippet(mockSnippet);

    expect(scope.savedSnippet).toBeUndefined();
  });

  it('should save a snipped when addSnippet() is called', function () {
    // simulate a validated snippet
    mockSnippet.$valid = true;
    scope.addSnippet(mockSnippet);

    expect(scope.savedSnippet.author).toEqual('Jack');
    expect(scope.savedSnippet.created).toBeDefined();
  });

  it('should redirect home after adding a snippet', function () {
    // simulate a validated snippet
    mockSnippet.$valid = true;
    scope.addSnippet(mockSnippet);

    expect(scope.newLocation).toEqual('/');
  });
});
