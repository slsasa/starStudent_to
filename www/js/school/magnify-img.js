/**
 * Created by sls on 16/5/13.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('magnify-img',{
        url:'/magnify',
        cache: false,
        templateUrl: 'templates/school/magnify-img.html',
        controller:'magnifyImgCtrl'
      });
  })
  .controller('magnifyImgCtrl',function($scope, userInfo){

    $scope['img'] = rootPicUrl + userInfo['banner']['Url'];


    userInfo.banner = '';
  });
