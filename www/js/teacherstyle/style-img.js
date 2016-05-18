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

  .controller('styleImgCtrl',function($scope, $stateParams, userInfo, $http,$ionicLoading){

    console.log('log teacher info >>>', userInfo.teacherInfo);
    $scope.teacher = userInfo.teacherInfo;
    userInfo.teacherInfo = '';

    var getSelfInfo = function(){
      $scope.Imgs = $scope.teacher['StyleItem'];
      console.log('Imgs >>>>', $scope.Imgs);
    };

    $scope.$on('$ionicView.beforeEnter',function(){
      getSelfInfo();
    })






  })
