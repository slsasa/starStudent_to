/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myLogs-detail',{
        url:'/works/log-detail',
        templateUrl:'templates/person/logs-detail.html',
        controller:'myLogsDetailCtrl'
      });
  })
  .controller('myLogsDetailCtrl', function ($scope,userInfo) {
    $scope.log  = userInfo.mgLog;
  })
