/**
 * Created by apple-ty on 16-5-4.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('applyDetail',{
        url:'/apply/applyDetail:applyId',

          templateUrl: 'templates/apply/apply-details.html',
          controller: 'applyDetailCtrl'

      });
  })
.controller('applyDetailCtrl',function($scope, $state, $stateParams, userInfo){
    $scope.apply = userInfo.apply;
    userInfo.apply = '';

    $scope.goSubmitApply = function(){
      userInfo.apply = $scope.apply;
      $state.go('applySubmit');
    }

  })
