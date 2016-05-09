/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacher-person',{
        url:'/personage-msg',
        templateUrl: 'templates/person/personage-msg.html',
        controller: 'personageCtrl'

      });
  })
  .controller('personageCtrl',function(){

  })
