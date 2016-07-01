/**
 * Created by sls on 16/5/6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works-detail',{
        url:'/works-detail',
        templateUrl:'templates/production/works-detail.html',
        controller:'logDetailCtrl'
      });
  })

  .controller('logDetailCtrl', function ($scope,$stateParams,userInfo,$http,$ionicPopup) {

    $scope.teacher  = userInfo.teacherInfo;
    $scope.tearchingLog = userInfo.log;
    $scope.rootPicUrl = rootPicUrl;

    $scope['linkClick'] = function () {
      var url = rootUrl + '/teacher_article/add_like';
      $http.post(url, {UserId: userInfo['_id'], ArticleId: $scope['tearchingLog']['_id']})
        .success(function (result) {
          $ionicPopup.alert({
            title:'成功',
            template:'点赞成功'
          })
        })
        .error(function (err) {

          $ionicPopup.alert({
            title:'失败',
            template:'点赞失败'+err
          })
        });
    };




    $scope.shareWeChat = function() {

      isInstalleagdWeChat();
      if ($scope.tearchingLog['Content'] != '  ') {
        alert(' neirong');
        Wechat.share({
          text: $scope.tearchingLog['Content'],
          scene: Wechat.Scene.TIMELINE  // share to Timeline
        }, function () {
          $ionicPopup.alert({
            title: '提示',
            template: '成功'
          });

        }, function (reason) {
          $ionicPopup.alert({
            title: '分享失败',
            template: reason
          });
        });
      } else {
          var message = {
            title: "This is a Title",
            description: "Sending from test application",
            //text: "分享是什么鬼 ",
            //mediaTagName: "TEST-TAG-001",
            messageExt: "这是第三方带的测试字段",
            messageAction: "<action>dotalist</action>",
            media: {
              type: Wechat.Type.IMAGE,
              image: rootPicUrl+ $scope.tearchingLog['PicListRef'][0]['Url']
              }
          };
          Wechat.share({
            message:message,
            scene: Wechat.Scene.TIMELINE   // share to Timeline
          }, function () {
            $ionicPopup.alert({
              title:'成功',
              template:'分享成功'
            });
          }, function (reason) {
            $ionicPopup.alert({
              title:'失败',
              template:'分享失败:'+reason
            });
          });
        }
      }



  })
