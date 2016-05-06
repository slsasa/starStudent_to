/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.techer-comment',{
        url:'/techer-comment',
        views:{'stuPerson':{
          templateUrl: 'templates/techer-comment/techer-comment.html',
          controller:'techerComCtrl'
        }}
      });
  })
  .controller('techerComCtrl',function($scope){

  })
