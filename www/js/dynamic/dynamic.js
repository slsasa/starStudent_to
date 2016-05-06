/**
 * Created by apple-ty on 16-4-29.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.dynamic-tabs',{
        url:'/dynamic-tabs',
        abstract: true,
        views:{'dynamic':{
          templateUrl: 'templates/dynamic/dynamic.html',
          controller:'dynamicCtrl'

        }}
      });
  })


