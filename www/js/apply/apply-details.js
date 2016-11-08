/**
 * Created by apple-ty on 16-5-4.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('applyDetail', {
        url: '/apply/applyDetail',
        cache: false,
        templateUrl: 'templates/apply/apply-details.html',
        controller: 'applyDetailCtrl'

      });
  })
  .controller('applyDetailCtrl', function (userInfo, $scope,$ionicPopup,$state) {

    $scope.rootPicUrl = rootPicUrl;
    $scope.apply =  userInfo.apply;

    $scope.goSubmitApply = function () {
      $state.go('applySubmit');
    };

    var text ='活动：' + $scope.apply['Title']+'   活动详情：'+$scope.apply['Content']
    $scope.shareWeChat = function(){

      isInstalleagdWeChat();
      Wechat.share({
        text:text,
        scene:  Wechat.Scene.TIMELINE  // share to Timeline
      }, function () {
        $ionicPopup.alert({
          title:'成功' ,
          template:'分享成功'
        });
      }, function (reason) {
        $ionicPopup.alert({
          title:'失败' ,
          template:'分享失败：'+reason
        });
      });
    }


  });

