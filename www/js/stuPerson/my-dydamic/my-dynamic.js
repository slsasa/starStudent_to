/**
 * Created by apple-ty on 16-5-9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.my-dynamic',{
        url:'/my-dynamic',
        views:{'stuPerson':{
          templateUrl: 'templates/stuPerson/my-dynamic/my-style.html',
          controller: 'myDayamicCtrl'
        }}
      });
  })
  .controller('myDayamicCtrl',function($scope){

  })
