;(function() {
  'use strict'
  
  angular
    .module('app')
    .controller('AppController', AppController)
      
  AppController.$inject = ['$http','$location','$routeParams']
  
  function AppController($http, $location, $routeParams) {
    var ctrl = this;

    $http.get('data/2-meetup-mga.json')
      .then(function(response) {
        ctrl.users = response.data
        if ($routeParams.userId) {
          angular.forEach(ctrl.users, function(user) {
            if (user['Identificação do usuário'] == $routeParams.userId) {
              ctrl.user = user;
            }
          });
        };
      });

      ctrl.certificate = function(user) {
        $location.path('certificate/' + user['Identificação do usuário']);
      };
  };
})();