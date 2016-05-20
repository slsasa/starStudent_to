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
    console.log("=>>" + JSON.stringify(userInfo['banner']))
    $scope['img'] = userInfo['banner']['bannerImg'];

    console.log('img banner magnify --->>>>>>>>>',JSON.stringify($scope.img))
    userInfo.banner = '';
  });
