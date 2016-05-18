/**
 * Created by sls on 16/5/6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works-detail',{
        url:'/works-detail',
        templateUrl:'templates/production/works-detail.html',
        controller:'logsDetailCtrl'
      });
  })

  .controller('logsDetailCtrl', function ($scope,$stateParams,userInfo) {



    $scope.tearchingLog = userInfo['Log'];
    console.log('logdetail',JSON.stringify($scope.teacherLog));

  })
