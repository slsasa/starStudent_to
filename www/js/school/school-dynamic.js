/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('school-dynamic',{
        url:'/school-dynamic',
        templateUrl:'templates/school/school-dynamic.html',
        controller:'schoolDynamicCtrl'

      })
  })
  .controller('schoolDynamicCtrl',function($scope, $state, $http, $ionicSlideBoxDelegate, $ionicLoading,userInfo) {

    $scope.schoolDynamics = userInfo.schoolDynamics;
    $scope.banner_list =  userInfo.banner_list;


    $scope.goDetail = function(dynamic){
      userInfo.dynamicDetail = dynamic;
      $state.go('school-dyncdetails');
    }
  })
