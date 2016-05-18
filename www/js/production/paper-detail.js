/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('paper-detail', {
        url: '/paper-detail',
        templateUrl: 'templates/production/paper-detail.html',
        controller: 'paperDetailCtrl'
      });
  })
  .controller('paperDetailCtrl', function ($scope,userInfo) {
     $scope['teacher'] = userInfo['teacherInfo'];
     $scope['paper'] = userInfo.paper;
     userInfo['teacherInfo'] = {};

  });

