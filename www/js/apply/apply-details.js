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
    //$scope.apply = userInfo.apply;
    //userInfo.apply = '';

    //$scope.showApply = function () {
    //
    //  // Show the action sheet
    //  var hideSheet = $ionicActionSheet.show({
    //    titleText: "操作当前文章",
    //    buttons: [
    //      {text: "我的动态"},
    //      {text: "微信"},
    //      {text: "新浪微博"}
    //    ],
    //    buttonClicked: function (index) {
    //      return true;
    //    },
    //    cancelText: "取消",
    //    cancel: function () {
    //      // add cancel code..
    //    }
    //
    //  });
    //
    //  // For example's sake, hide the sheet after two seconds
    //  $timeout(function () {
    //    //	hideSheet();
    //  }, 2000);
    //
    //};


    $scope.apply =  userInfo.apply;

    $scope.goSubmitApply = function () {

      $state.go('applySubmit');
    }
  });

