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
    //var message = {
    //  title: $scope.apply['Title'],
    //    description: $scope.apply['Content'],
    //    mediaTagName: "TEST-TAG-001",
    //    messageExt: "这是第三方带的测试字段",
    //    messageAction: "<action>dotalist</action>",
    //    media: {
    //    type: "Wechat.Type.IMAGE",
    //      image: rootPicUrl+ $scope.apply['PicRef']['Url']
    //  }
    //}
    //var message = {
    //  title: "This is a Title",
    //  description: "Sending from test application",
    //  text: "分享是什么鬼 ",
    //  mediaTagName: "TEST-TAG-001",
    //  messageExt: "这是第三方带的测试字段",
    //  messageAction: "<action>dotalist</action>",
    //  media: [{
    //    type: Wechat.Type.IMAGE,
    //    image: rootPicUrl+ $scope.apply['PicRef']['Url']
    //    },{
    //    type: Wechat.Type.IMAGE,
    //    image: rootPicUrl+ $scope.apply['PicRef']['Url']
    //  }]
    //};
    //alert("message -> " + JSON.stringify(message));
    //$scope.shareApply = function(){
    //
    //  Wechat.share({
    //    message:message,
    //    scene: Wechat.Scene.TIMELINE   // share to Timeline
    //  }, function () {
    //    $ionicPopup.alert({
    //      title:'成功',
    //      template:'分享成功'
    //    });
    //  }, function (reason) {
    //    $ionicPopup.alert({
    //      title:'失败',
    //      template:'分享失败'
    //    });
    //  });
    //
    //}

  });

