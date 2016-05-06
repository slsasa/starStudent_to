/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.students-honor',{
        url:'/students-honor',
        views:{'stuPerson':{
          templateUrl: 'templates/Students-honor/students-honor.html',
          controller:'studentHonorCtrl'
        }}
      });
  })
  .controller('studentHonorCtrl',function($scope){

  })
