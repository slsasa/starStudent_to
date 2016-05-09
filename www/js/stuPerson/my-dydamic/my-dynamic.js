/**
 * Created by apple-ty on 16-5-9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-dynamic',{
        url:'/my-dynamic',
          templateUrl: 'templates/stuPerson/my-dynamic/my-dynamic.html',
          controller: 'myDayamicCtrl'
      });
  })
  .controller('myDayamicCtrl',function($scope){

  })
