/**
 * Created by apple-ty on 16-4-28.
 */

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.honor-tabs',{
        abstract:true,
        url:'/honor-tabs',
        views:{'tabs-home':{
          templateUrl: 'templates/honorUp/school-honor.html',
        }}
      });
  })

