/**
 * Created by apple-ty on 16-5-9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.myApply',{
        url:'/myApply',
        views:{'stuPerson':{
          templateUrl: 'templates/stuPerson/myApply/myApply.html',
          controller: 'myApplyCtrl'
        }}
      });
  })
  .controller('myApplyCtrl',function($scope){

  })
