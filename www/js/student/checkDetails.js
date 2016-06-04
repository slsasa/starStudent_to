/**
 * Created by apple-ty on 16-5-10.
 */

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('checkDetails',{
        url:'/checkDetails',
        templateUrl: 'templates/student/checkDetails.html',
        controller:'checkDetailsCtrl'
      });
  })
  .controller('checkDetailsCtrl',function($scope, $stateParams, userInfo){
    $scope.learn = userInfo.learnInfo;
    userInfo.learnInfo = '';




  })
