/**
 * Created by apple-ty on 16-4-28.
 */

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.school-honor',{
        abstract:true,
        url:'/school-honor',
        views:{'tabs-home':{
          templateUrl: 'templates/honorUp/school-honor.html'
        }}
      });
  })

