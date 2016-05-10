/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-dynamic',{
        url:'/person-teacher/my-dynamic',
        templateUrl: 'templates/person/my-dynamic.html',
        controller: 'myStyleCtrl'

      });
  })
