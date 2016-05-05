/**
 * Created by sls on 16/5/5.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.teacher-tabs.pro-tabs',{
        url:'/pro-tabs',
        abstract:true,
        views:{'teacher-chat':{
          templateUrl:'templates/production/production-tabs.html',
        }}
      });
  })
