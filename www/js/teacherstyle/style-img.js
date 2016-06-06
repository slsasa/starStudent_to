/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('style-img',{
        url:'/personal-style:teacherId/style-img',
        templateUrl:'templates/teacherstyle/style-img.html',
        controller:'styleImgCtrl'
      });
  })

  .controller('styleImgCtrl',function($scope, userInfo){

    $scope.teacher = userInfo.teacherInfo;

    userInfo.teacherInfo ={};


  })
