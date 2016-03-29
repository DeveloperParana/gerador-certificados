;(function() {
  'use strict';
  
  angular
    .module('app')
    .config(Config)
      
  function Config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl  : 'app/search.html',
        controller   : 'AppController',
        controllerAs : 'ctrl'
      })
      .when('/certificate/:userId', {
        templateUrl  : 'app/certificate.html',
        controller   : 'AppController',
        controllerAs : 'ctrl'
      });
  };
})();