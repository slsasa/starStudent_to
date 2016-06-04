/**
 * Created by sls on 16/6/3.
 */
angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('stuHonorDetail',{
        url:'/stu-honor-detail',
        templateUrl:'templates/student/stuHonorDetail.html',
        controller:'stuHonorDetailCtrl'
      });
  })
  .controller('stuHonorDetailCtrl',function($scope,userInfo){
        $scope.learn = userInfo.learn;
  })
