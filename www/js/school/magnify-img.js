/**
 * Created by sls on 16/5/13.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('magnify-img',{
        url:'/magnify',
        templateUrl: 'templates/school/magnify-img.html',
        controller:'magnifyImgCtrl'
      });
  })
  .controller('magnifyImgCtrl',function($scope, userInfo){
    $scope['img'] = userInfo['banner']['bannerImg'];

    console.log('img banner magnify --->>>>>>>>>',JSON.stringify($scope.img))
    userInfo['banner'] = {};

  });
