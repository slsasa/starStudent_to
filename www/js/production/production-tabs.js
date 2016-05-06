/**
 * Created by sls on 16/5/5.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.pro-tabs',{
        url:'/teacher-chat/pro-tabs:teacherId',
        abstract:true,
        views:{'tabs-home':{
          templateUrl:'templates/production/production-tabs.html',
          controller:'productionCtrl'
        }}
      });
  })

  .controller('productionCtrl',function($scope,$state,$stateParams){
      $scope.teacherId = $stateParams.teacherId;

  })
