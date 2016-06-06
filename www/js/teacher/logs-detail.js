/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myLogs-detail',{
        url:'/logs/log-detail',
        templateUrl:'templates/teacher/logs-detail.html',
        controller:'myLogsDetailCtrl'
      });
  })
  .controller('myLogsDetailCtrl', function ($scope,userInfo) {
    $scope.log  = userInfo.mgLog;
    //console.log(JSON.stringify($scope.log))
  })
