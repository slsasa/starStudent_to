/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.learn-situation',{
        url:'/learn-situation',
        views:{'stuPerson':{
          templateUrl: 'templates/Learn-situation/learn-situation.html',
          controller:'LearnSitCtrl'
        }}
      });
  })
  .controller('LearnSitCtrl',function($scope){

  })
