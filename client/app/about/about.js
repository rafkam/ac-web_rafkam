'use strict';

angular.module('avalancheCanadaApp')
    .config(function ($routeProvider) {

        $routeProvider
            .when('/about', {
                templateUrl: 'app/about/about.html',
                controller: 'AboutCtrl'
            });
    });
  /*.config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      });
  });*/
