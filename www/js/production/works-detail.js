/**
 * Created by sls on 16/5/6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works-detail',{
        url:'/works-detail',
        templateUrl:'templates/production/works-detail.html',
        controller:'logDetailCtrl'
      });
  })

  .controller('logDetailCtrl', function ($scope,$stateParams,userInfo) {

    $scope.teacher  = userInfo.teacherInfo;
    $scope.tearchingLog = userInfo.log;
    userInfo['teacherInfo'] = {};

  })
