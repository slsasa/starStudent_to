/**
 * Created by sls on 16/5/9.
 */
angular.module('starter.controllers',[])
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs', {
        url: '/tabs',
        abstract: true,
        cache: false,
        templateUrl: 'templates/login/tabs.html',
        controller:'tabsCtrl'
      })
  })
  .controller('tabsCtrl',function($scope, userInfo){
    $scope.type = userInfo.personType;
  })
