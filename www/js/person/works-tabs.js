/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works-tabs',{
        url:'/works-tabs',
        abstract:true,

          templateUrl:'templates/person/works-tabs.html',

      });
  })
