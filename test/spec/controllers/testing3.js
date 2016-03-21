'use strict';

describe('Controller: Testing3Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularfireSeedApp'));

  var Testing3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Testing3Ctrl = $controller('Testing3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
