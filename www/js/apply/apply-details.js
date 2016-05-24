/**
 * Created by apple-ty on 16-5-4.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('applyDetail', {
        url: '/apply/applyDetail',
        templateUrl: 'templates/apply/apply-details.html',
        controller: 'applyDetailCtrl'

      });
  })
  .controller('applyDetailCtrl', function (userInfo, $scope, $state, $ionicActionSheet, $timeout) {

    $scope.apply =  userInfo.apply;

    $scope.goSubmitApply = function () {

      $state.go('applySubmit');
    }
  });

