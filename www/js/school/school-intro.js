/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('school-intro',{
        url:'/school-intro',
        templateUrl: 'templates/school/school-intro.html',
        controller: 'introCtrl'
      });
  })
  .controller('introCtrl',function($scope,$stateParams){



  })
