'use strict';

describe('Filter: testPipe', function () {

  // load the filter's module
  beforeEach(module('angularEs6DemoApp'));

  // initialize a new instance of the filter before each test
  var testPipe;
  beforeEach(inject(function ($filter) {
    testPipe = $filter('testPipe');
  }));

  it('should return the input prefixed with "testPipe filter:"', function () {
    var text = 'angularjs';
    expect(testPipe(text)).toBe('testPipe filter: ' + text);
  });

});
