/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs', {
        url: '/tabs:type',
        abstract: true,
        cache: false,
        templateUrl: 'templates/tabs.html',
        controller:'tabsCtrl'
      })
  })
  .controller('tabsCtrl',function($scope,$stateParams){
    $scope.type = $stateParams.type;
  })
