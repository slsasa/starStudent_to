/**
 * Created by apple-ty on 16-5-10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myApplydet',{
        url:'/myApply/myApplyDetail',
        templateUrl: 'templates/stuPerson/myApply/myApplydet.html',
        controller: 'myApplyDetailCtrl'
      });
  })
  .controller('myApplyDetailCtrl',function($scope,userInfo){

    $scope.rootPicUrl =  rootPicUrl;
    $scope.myApply = userInfo.apply;

    var text ='活动：' + $scope.myApply['Title']+'   活动详情：'+$scope.myApply['Content'];
    $scope.shareWeChat = function(){

      isInstalleagdWeChat();
      Wechat.share({
        text:text,
        scene:  Wechat.Scene.TIMELINE  // share to Timeline
      }, function () {
        $ionicPopup.alert({
          title:'提示' ,
          template:'成功'
        });
      }, function (reason) {
        $ionicPopup.alert({
          title:'Failed' ,
          template:reason
        });
      });
    }

  })
