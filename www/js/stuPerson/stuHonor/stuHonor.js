/**
 * Created by apple-ty on 16-5-9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.stuHonor',{
        url:'/stuHonor',
        views:{'stuPerson':{
          templateUrl: 'templates/stuPerson/stuHonor/stuHonor.html',
          controller: 'stuHonorCtrl'
        }}
      });
  })
  .controller('stuHonorCtrl',function($scope){

  })
