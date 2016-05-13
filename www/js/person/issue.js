/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('issue',{
        url:'/issue',
        templateUrl:'templates/person/issue.html',
        controller:'issueCtrl'
      });
  })
  .controller('issueCtrl',function($scope){
      $scope.contents;
  })
