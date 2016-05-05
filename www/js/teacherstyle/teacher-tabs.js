/**
 * Created by sls on 16/5/3.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.teacher-tabs',{
        abstract:true,
        url:'/teacher-tabs',
        views:{'tabs-home':{
          templateUrl:'templates/teacherstyle/teacher-tabs.html',
        }}
      });
  })
