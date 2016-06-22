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
  .controller('applyDetailCtrl', function (userInfo, $scope, $state) {

    $scope.rootPicUrl = rootPicUrl;
    $scope.apply =  userInfo.apply;
    console.log('---------------------->',$scope.apply);

    $scope.goSubmitApply = function () {

      $state.go('applySubmit');
    };
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
    var message = {
      title: "This is a Title",
      description: "Sending from test application",
      text: "分享是什么鬼 ",
      mediaTagName: "TEST-TAG-001",
      messageExt: "这是第三方带的测试字段",
      messageAction: "<action>dotalist</action>",
      media: [{
        type: Wechat.Type.IMAGE,
        image: rootPicUrl+ $scope.apply['PicRef']['Url']
        },{
        type: Wechat.Type.IMAGE,
        image: rootPicUrl+ $scope.apply['PicRef']['Url']
      }]
    };
    alert("message -> " + JSON.stringify(message));
    $scope.shareApply = function(){

      Wechat.share({
        message:message,
        scene: Wechat.Scene.TIMELINE   // share to Timeline
      }, function () {
        alert("Success");
      }, function (reason) {
        alert("Failed: " + reason);
      });

    }

  });

