/**
 * Created by apple-ty on 16-5-4.
 */
angular.module('starter')
  .controller('ApplydetaCtrl',function($scope,$state){
    $scope.apply = function () {
      $state.go('submit-apply')
    }
  });
