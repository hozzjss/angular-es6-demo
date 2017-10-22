'use strict';

/**
 * @ngdoc filter
 * @name angularEs6DemoApp.filter:testPipe
 * @function
 * @description
 * # testPipe
 * Filter in the angularEs6DemoApp.
 */
angular.module('angularEs6DemoApp')
  .filter('testPipe', function () {
    return function (input) {
      return 'testPipe: ' + input;
    };
  });
