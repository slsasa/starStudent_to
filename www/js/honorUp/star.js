/**
 * Created by apple-ty on 16-4-29.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.honor-tabs.star-list',{
        url:'/star-list',
        views:{'star':{
          templateUrl: 'templates/honorUp/star.html',
          controller:'starListCtrl'
        }}
      });
  })
  .controller('starListCtrl',function($scope){
    $scope.starList  = [{
      id:0,
      name:'moumou',
      img:'img/img3.png',
      honorDetail:'获奖情况：2015年下半年年级一等经，语文119、数学110、英语120、综合280'
    },{
      id:1,
      img:'img/img2.png',
      name:'moumou',
      honorDetail:'获奖情况：43015年下半年年级一等经，语文119、数学110、英语120、综合280'
    }];
  })
