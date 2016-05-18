/**
 * Created by sls on 16/4/29.
 */
angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('school-dyncdetails',{
        url:'/school-dynamic/:dynamicId',
        templateUrl:'templates/school/school-dyncdetails.html',
        controller:'dynamicDetailsCtrl'

      })
  })

  .controller('dynamicDetailsCtrl',function($scope,userInfo){

    $scope.dynamic =  userInfo.dynamicDetail;
    userInfo.dynamicDetail = {};

  })
