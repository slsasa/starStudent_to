/**
 * Created by apple-ty on 16-5-8.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('learn-garden',{
        url:'/learn-garden',
          templateUrl: 'templates/stuPerson/learn-garden/learn-garden.html',
          controller: 'learnGardenCtrl'
      });
  })
  .controller('learnGardenCtrl',function($scope){
    $scope.banners =[
      {
        id:0,
        bannerImg:'img/img2.png',
        context:'擦擦',
        time:1461340799000
      },{
        id:1,
        bannerImg:'img/img3.png',
        context:'什么什么学院东东',
        time:1461340549000
      },{
        id:2,
        bannerImg:'img/img4.png',
        context:'字符串',
        time:1461240542302
      },{
        id:3,
        bannerImg:'img/img1.png',
        context:'行动的傻子，思想上的猪，嘴上的大侠',
        time:143131231331
      }];
  })
